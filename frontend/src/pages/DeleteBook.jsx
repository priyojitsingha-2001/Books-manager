import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';


export default function DeleteBook() {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const handleDelete = () => {
        setLoading(true);
        axios.delete(`http://localhost:3000/books/details/${id}`)
            .then(() => {
                setLoading(false);
                Navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened, Please check console');
                console.log(error.message);
            });
    }
    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Delete Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='border-2 border-gray-400 rounded-xl w-[600px] p-8 mx-auto text-center'>
                <h3 className='text-3xl font-bold'>Are You Sure</h3>
                <p className='text-xl'>You want to delete this book?</p>
                <button
                    className='p-4 bg-red-600 text-white mx-auto my-5 '
                    onClick={handleDelete}
                >
                    Yes, Delete it
                </button>
            </div>
        </div>
    )
}
