import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';


export default function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:3000/books/');
                setBooks(result.data.data);
                setLoading(false);
            } catch (error) {
                console.log(error.mesage);
                setLoading(false);
            }
        }
        fetchData();
    });
    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Books List</h1>
                <NavLink to='/books/create' className="px-5 py-2 bg-slate-200 shadow-md rounded-lg active:shadow-none">Add</NavLink>
            </div>
            {
                loading ? (
                    <Spinner />
                ) : (
                    <table className='w-full border-spacing-2'>
                        <thead>
                            <tr>
                                <th className="border border-slate-500 text-slate-700 rounded-md">No. </th>
                                <th className="border border-slate-500 text-slate-700 rounded-md">Title</th>
                                <th className="border border-slate-500 text-slate-700 rounded-md">Author</th>
                                <th className="border border-slate-500 text-slate-700 rounded-md">Publish Year</th>
                                <th className="border border-slate-500 text-slate-700 rounded-md">Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, index) => (

                                <tr key={book._id} className="h-9">
                                    <td className="border border-slate-500 rounded-md text-center">
                                        {index + 1}
                                    </td>
                                    <td className="border border-slate-500 rounded-md text-center">
                                        {book.title}
                                    </td>
                                    <td className="border border-slate-500 rounded-md text-center">
                                        {book.author}
                                    </td>
                                    <td className="border border-slate-500 rounded-md text-center">
                                        {book.publishYear}
                                    </td>
                                    <td className="border border-slate-500 rounded-md text-center">
                                        <Link to={`/books/details/${book._id}`}>
                                            View
                                        </Link>
                                        /
                                        <Link to={`/books/edit/${book._id}`}>
                                            Edit
                                        </Link>
                                        /
                                        <Link to={`/books/delete/${book._id}`}>
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}
