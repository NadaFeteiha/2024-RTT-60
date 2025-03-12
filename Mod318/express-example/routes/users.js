const express = require('express');
const router = express.Router();
const users = require('../data/users');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router
    .route('/')
    .get((req, res) => {
        res.json(users)
    })
    .post((req, res) => {
        if (req.body.name && req.body.username && req.body.email) {
            if (users.find((user) => user.username == req.body.username)) {
                res.json({ error: "Username already exists" })
                return
            }
        }
        const user = {
            id: users[users.length - 1].id + 1,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
        }
        users.push(user)
        res.json(users[users.length - 1])
    });

router.route('/:usersID')
    .get((req, res) => {
        const user = users.find(user => user.id == req.params.usersID);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send("User not found");
        }
    })
    .patch((req, res) => {
        const user = users.find(user => user.id == req.params.usersID);
        if (user) {
            Object.assign(user, req.body);
            res.json(user);
        } else {
            res.status(404).send("User not found");
        }
    })
    .delete((req, res) => {
        const userIndex = users.findIndex(user => user.id == req.params.usersID);
        if (userIndex > -1) {
            const deletedUser = users.splice(userIndex, 1)[0];
            res.status(200).json({ message: "User deleted successfully", user: deletedUser });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    });

module.exports = router;
