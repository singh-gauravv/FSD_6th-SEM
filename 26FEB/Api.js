const express = require('express');
const app = express()
const PORT = 3000;

let books =[
    {
        id: 1,
        title: "The Great Gatsby",
        author : 'F. Scott Fitzgerald'
    },
    {
        id: 2,
        title: " To Kill a Mockingbird",
        author : 'Harper Lee'
    },
];

app.get('/api/books',(req,res)=>{
    res.json(books);
});

app.get('/api/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const book= books.find(book=>book.id===id);
    if(book){
        res.json(book);
    }
})

app.listen(PORT,(req,res)=>{
    console.log('Server is running at 3000')
})