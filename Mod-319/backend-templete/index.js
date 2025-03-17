import express from 'express';

// for deployment the port will be provided by the server
// the 4000 as default port for development
const PORT = process.env.PORT || 4000;

const app = express();

// view engine 
app.set('views', './views'); // where the views are located
app.set('view engine', 'pug');// the view engine type


// middleware 
// functions that executes for every request to the app
app.use(express.static('./public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
