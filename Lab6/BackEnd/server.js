const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");

const app = express();
const port = 4000;

// Enable Cors rules
app.use(cors());
app.use(function (req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Middleware
app.use(bodyParser.json())

// Data
let jsonBooksData =
{
    "books": [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": [
                "Rick Umali"
            ],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": [
                "Simon Holmes"
            ],
            "categories": []
        }
    ]
}

// Get books api route
app.get('/api/books', (req, res) =>
{
    res.json(jsonBooksData)
})

// Post books route
app.post('/api/books', (req, res) =>
{
    let result = req.body;
    result.isbn = Math.round(Math.random() * 1000000000)
    result.authors = ["Me"]
    jsonBooksData.books.push(result)
})

app.listen(port, () =>
{
    console.log(`Example app listening on port ${port}`)
})
