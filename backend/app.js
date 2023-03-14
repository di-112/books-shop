const app = require('express')()
const cors = require('cors');
const { books: allBooks } = require('./db/books.json')
const express = require("express");

const allowedOrigins = ['https://di-112.github.io/books-shop',
                        'http://localhost:5173/'];
app.use(cors({
    origin: function(origin, callback){
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
app.use(express.json())

app.post('/api/books', (req, res) => {
    const { limit, page, search, filters } = req.body

    const books = search ? allBooks.filter(book => book.title.toLowerCase().includes(search.toLowerCase())) : allBooks

    const start = limit * (page - 1)

    const end = start + Number(limit)

    if (filters.isActive) {
        const categories = filters?.categories
        const rating = filters?.rating || 0
        const { min = 0, max = 10000 } = filters?.price || {}

        const filteredBooks = books.filter(book => {
            const isCategory = categories.length
                ? categories.some(category => book.category.title.toLowerCase().includes(category.toLowerCase()))
                : true

            const isRating = Number(book.rating.count) >= rating

            const isPrice = book.price >= min && book.price <= max

            return isCategory && isRating && isPrice
        })

        return res.send({
            books: filteredBooks.slice(start, end),
            total: filteredBooks.length
        })
    }

    res.send({
        books: books.slice(start, end),
        total: books.length
    })
})

const PORT = process.env.PORT || 5050

app.listen(PORT, () => {
    console.log(`Server start on ${PORT} port`)
})

