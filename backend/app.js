const app = require('express')()
const cors = require('cors');
const { books } = require('./db/books.json')
const express = require("express");

app.use(cors());
app.use(express.json())

app.get('/api/books', (req, res) => {

    const { limit, page, search } = req.query

    if (search) {
        return res.send({
            books: books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
        })
    }

    const start = limit * (page - 1)

    const end = start + Number(limit)

    res.send({
        books: books.slice(start, end),
        total: books.length
    })
})

app.listen(6500)

