const express = require("express")
const usersRoutes = require('./routes/users')
const app = express()
const PORT = 3000


//Middleware Timestamp
app.use((req, res, next) => {
    console.log(`Request received at: ${new Date()}`)
    next();
}
)

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get("/express", (req, res) => {
    res.send("This is my express page")
})

app.get("/about", (req, res) => {
    res.send("This is my about page")
})

// app.get("/users", (req, res) => {
//     res.send("This is a get request for users")
// })


app.post('/users', (req, res) => {
    res.send("This is a post request for users")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})