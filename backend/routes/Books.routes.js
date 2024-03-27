import { handleCreate, handleGet, handleGetById, handleUpdate, handleDelete } from '../controllers/Books.controllers.js';
import express from 'express';

const router = express.Router();

//GET all books
router.get("/", handleGet);
//CREATE a new book
router.post("/create", handleCreate);
//GET a book by id
router.get("/details/:id", handleGetById);
//UPDATE a book
router.put("/edit/:id", handleUpdate);
//DELETE a book
router.delete("/delete/:id", handleDelete);

export default router;
