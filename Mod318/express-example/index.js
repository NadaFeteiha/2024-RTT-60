const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = require('./data/users');
const posts = require('./data/posts');

app.get('/', (req, res) => {
    res.send('Base Home Page!');
});


app.get('/users', (req, res) => {
    res.json(users);
});


app.route('/users')
    .get((req, res) => {
        res.json(users);
    })
    .post((req, res) => {
        if (req.body.username && req.body.name) {
            if (users.find((user) => user.username === req.body.username)) {
                res.json({ error: "Usernamne alreray exists" });
                return;
            }

        }

        const newUser = {
            id: users.length + 1,
            username: req.body.username,
            name: req.body.name,
            email: req.body.email
        };
        users.push(newUser);
        res.json(users[users.length - 1]);
    });

app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send('User not found');
    }
    res.json(user);
});

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

