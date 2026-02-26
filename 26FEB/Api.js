import express from 'express';

const app = express();
const PORT = 7000;

app.use(express.json());

let books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee"
    },
];

// Get all books
app.get("/api/books", (req, res) => {
    res.json(books);
});

// Get book by ID
app.get("/api/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});