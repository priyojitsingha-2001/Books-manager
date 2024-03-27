import Book from "../models/Book.model.js";

export const handleGet = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        res.status(200).json({
            count: allBooks.length,
            data: allBooks
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
export const handleGetById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findById(id);
        if (!result)
            return res.status(404).send({ message: "Book not found" });
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
export const handleCreate = async (req, res) => {
    try {
        const title = req.body.title;
        const author = req.body.author;
        const publishYear = req.body.publishYear;
        if (!title || !author || !publishYear) {
            return res.status(404).send({ message: 'send all required fields' });
        }
        const newBook = {
            title: title,
            author: author,
            publishYear: publishYear
        };
        console.log(newBook);
        const book = await Book.create(newBook);
        res.status(201).send(book);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
export const handleUpdate = async (req, res) => {
    try {
        const title = req.body.title;
        const author = req.body.author;
        const publishYear = req.body.publishYear;
        if (!title || !author || !publishYear) {
            return res.status(404).send({ message: 'send all required fields' });
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result)
            return res.status(404).send({ message: "Book not found" });
        res.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
export const handleDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result)
            return res.status(404).send({ message: "Book not found" });
        res.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

};
