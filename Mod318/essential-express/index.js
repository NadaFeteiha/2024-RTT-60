const express = require('express');
const app = express();
const port = 3000;

const data = require('./data/mock');

// using the public folder to serve static files
app.use(express.static('public'));

// using the images folder to serve static files
app.use('/images', express.static('images'));

app.use((req, res, next) => {
    const time = new Date();
    console.log(`request received at ${time.toLocaleDateString()} ${time.toLocaleTimeString()}`);
    console.log(`request method: ${req.method} sent to ${req.url}`);
    next();
}
);

app.get('/', (req, res) => {
    res.send('Base Home Page!');
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});