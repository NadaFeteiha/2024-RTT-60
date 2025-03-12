
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const comments = require('../data/comments');

router.route("/")
    .get((req, res) => {
        res.json(comments);
    }
    ).post((req, res) => {
        if (req.body.userId && req.body.postId && req.body.content) {
            const comment = {
                id: comments[comments.length - 1].id + 1,
                userId: req.body.userId,
                postId: req.body.postId,
                content: req.body.content
            }
            comments.push(comment)
            res.json(comments[comments.length - 1])
        } else {
            res.json({ error: "Insufficient Data" })
        }
    }
    );


router
    .route('/:commentID')
    .get((req, res) => {
        const comment = comments.find(comment => comment.id == req.params.commentID);
        if (comment) {
            res.json(comment);
        } else {
            res.status(404).send("Comment not found");
        }
    }).patch((req, res) => {
        const comment = comments.find((comment, i) => {
            if (comment.id == req.params.commentID) {
                for (const key in req.body) {
                    comments[i][key] = req.body[key]
                }
                return true
            }
        })
        if (comment) res.json(comment)
        else { res.status(404).send("Comment not found") }
    })
    .delete((req, res) => {
        const comment = comments.find((comment, i) => {
            if (comment.id == req.params.commentID) {
                comments.splice(i, 1)
                return true
            }
        })
        if (comment) res.json(comment)
        else { res.status(404).send("Comment not found") }
    });

module.exports = router;



