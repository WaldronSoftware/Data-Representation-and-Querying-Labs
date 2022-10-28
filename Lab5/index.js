//Lab 5 - Ronan Waldron G00384180

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
const port = 3000
//middleware
app.use(bodyParser.urlencoded({ extended: false }))

// '/' in url displays following.
app.get('/', (req, res) =>
{
    res.send('Welcome to Data Representation & Querying')
})

// Displays text after '/hello/...' as name
app.get('/hello/:name', (req, res) =>
{
    res.send('Hello ' + req.params.name)
})

//Json Data
const bookDataJson =
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

//Url for displaying json data
app.get('/api/books', (req, res) =>
{
    res.json(bookDataJson)
})

//Url for test page
app.get('/test', (req, res) =>
{
    var options = {
        root: path.join(__dirname)
    };
    res.sendFile("./index.html", options)
})

//Url for name page
app.get('/name', (req, res) =>
{
    res.send("Hi " + req.query.first + " " + req.query.last)
})

//Url for name page using submitted firstname
app.post('/name', (req, res) =>
{
    console.log(req.body.first);
    res.send("First Name: " + req.body.first)
})

//Console message
app.listen(port, () =>
{
    console.log(`Example app listening on port ${port}`)
})
