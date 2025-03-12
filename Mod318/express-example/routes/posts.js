const express = require('express');
const bodyParser = require('body-parser');
const posts = require('../data/posts');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router
    .route('/')
    .get((req, res) => {
        res.json(posts)
    })
    .post((req, res) => {
        if (req.body.userId && req.body.title && req.body.content) {
            const post = {
                id: posts[posts.length - 1].id + 1,
                userId: req.body.userId,
                title: req.body.title,
                content: req.body.content
            }
            posts.push(post)
            res.json(posts[posts.length - 1])
        } else res.json({ error: "Insufficient Data" })
    })


router.route('/:postsID')
    .get((req, res) => {
        const post = posts.find(post => post.id == req.params.postsID);
        if (post) {
            res.json(post);
        } else {
            res.status(404).send("Post not found");
        }
    })
    .patch((req, res) => {
        const postIndex = posts.findIndex(post => post.id == req.params.postsID);
        if (postIndex !== -1) {
            const updatedPost = { ...posts[postIndex], ...req.body };
            posts[postIndex] = updatedPost;
            res.json(updatedPost);
        } else {
            res.status(404).send("Post not found");
        }
    }).delete((req, res) => {
        const postIndex = posts.findIndex(post => post.id == req.params.postsID);
        if (postIndex !== -1) {
            const deletedPost = posts.splice(postIndex, 1)[0];
            res.status(200).json({ message: "Post deleted successfully", post: deletedPost });
        } else {
            res.status(404).json({ error: "Post not found" });
        }
    }
    );


router
    .route("/:postsID/comments")
    .get((req, res) => {
        const comments = require("../data/comments")
        res.json(comments.filter(comment => comment.postId === req.params.postsID))
    })
module.exports = router;