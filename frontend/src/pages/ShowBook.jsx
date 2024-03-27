import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
//components
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

export default function ShowBook() {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const getBookById = async () => {
            try {
                const result = await axios.get(`http://localhost:3000/books/details/${id}`);
                console.log(result);
                setBook(result.data);
                setLoading(false);
            } catch (error) {
                console.log(error.mesage);
                setLoading(false);
            }
        }
        getBookById()
    }, []);
    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Show Book</h1>
            {
                loading ? (
                    <Spinner />
                ) : (
                    <div className="flex flex-col bg-slate-200 rounded-lg w-fit p-4 mx-auto">
                        <div className="my-4">
                            <span className="text-xl mr-4 text-gray-500">id</span>
                            <span>{book._id}</span>
                        </div>
                        <div className="my-4">
                            <span className="text-xl mr-4 text-gray-500">Title</span>
                            <span>{book.title}</span>
                        </div>
                        <div className="my-4">
                            <span className="text-xl mr-4 text-gray-500">Author</span>
                            <span>{book.author}</span>
                        </div>
                        <div className="my-4">
                            <span className="text-xl mr-4 text-gray-500">published Year</span>
                            <span>{book.publishYear}</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
