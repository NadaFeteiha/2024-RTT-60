

const express = require('express');
const bodyParser = require('body-parser');

const users = require('./routes/users');
const posts = require('./routes/posts');
const comments = require('./routes/comments');

const app = express();
const port = 3000;

// Middleware
// here we are using a middleware to log the request method and url
// and the time of the request
app.use((req, res, next) => {
    const time = new Date();
    console.log(`request received at ${time.toLocaleDateString()} ${time.toLocaleTimeString()}`);
    console.log(`request method: ${req.method} sent to ${req.url}`);
    next();
});

// below we are mounting the routes to the app
// so that the routes are accessible from the base URL
// e.g. /users, /posts
// the routes are defined in the routes folder
// and the files are users.js and posts.js
// the routes are defined in these files
// and exported as router objects
// these are then imported into this file and mounted to the app
// so that the routes are accessible from the base URL
app.use('/users', users);
app.use('/posts', posts);
app.use('/comments', comments);

app.get('/', (req, res) => {
    res.send('Base Home Page!');
});

// this is a catch all route
// if the request does not match any of the routes above
// this route will be called
// and it will return a 404 status code
// and a message saying the page was not found
app.use((req, res) => {
    res.status(404).send('Page not found');
});


// this is the listener
// it listens for requests on the specified port
// and logs a message to the console
// to say the server is running
// and listening on the specified port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


