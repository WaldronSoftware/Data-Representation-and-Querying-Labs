const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");
const Mongoose = require("mongoose");
const app = express();
const port = 4000;

// CORS
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

// Connect to MongoDB 
const mongoDB = "mongodb+srv://user1:XDnQYmR6cKuocWvn@cluster0.jrdegje.mongodb.net/?retryWrites=true&w=majority";
Mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Default connection
const db = Mongoose.connection;

// Connection error popup event
db.on("Error", console.error.bind(console, "Mongo Connection Error:"));

// Books database connection
let books = db.useDb("books")

// Book Schema 
const bookSchema = new Mongoose.Schema({
    title: String,
    year: Number,
    author: String,
    thumbnailUrl: String,
});

// Create BookModel
const BookModel = books.model("BookModel", bookSchema);

// Book API route
app.get('/api/books', async (req, res) => {
    console.log("Getting Book API");
    let books = await BookModel.find()
    res.json(books)
})

// Book Post route
app.post('/api/books', (req, res) => {
    let result = req.body;
    // BookModel for Database
    let book = new BookModel();
    book.title = result.title;
    book.year = result.year;
    book.thumbnailUrl = result.thumbnailUrl;
    book.author = result.author;

    // Save book to Mongoose
    book.save(OnError);
})

// Get book by id eg http://localhost:4000/api/book/6374e1c50250dc4fd4b56048
app.get('/api/books/:id', async (req, res) => {
    console.log(req.params.id);
    let book = await BookModel.findById(req.params.id)
    console.log(book);
    res.json(book)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
