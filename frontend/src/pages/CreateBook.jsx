import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//components
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

export default function CreateBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handelSaveBook = async () => {
        try {
            const data = {
                title,
                author,
                publishYear
            };
            setLoading(true);
            await axios.post(`http://localhost:3000/books/create`, data);
            setLoading(false);
            navigate('/');
        } catch (error) {
            setLoading(false);
            alert('An error happened, Please check console');
            console.log(error.message);
        }
    };
    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Create Book</h1>
            {loading ? <Spinner /> : ''}
            <div className="flex flex-col border-2 rounded-xl w-[600px] p-4 mx-auto">
                <label htmlFor="title" className='text-xl mr-4 text-gray-500'>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                    id='title'
                />
                <label htmlFor="author" className='text-xl mr-4 text-gray-500'>author</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                    id='author'
                />
                <label htmlFor="publish" className='text-xl mr-4 text-gray-500'>Published Year</label>
                <input
                    type="text"
                    value={publishYear}
                    onChange={(e) => setPublishYear(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                    id='publish'
                />
                <button className="p-2 bg-green-700 m-8" onClick={handelSaveBook}>Save</button>
            </div>
        </div>
    )
}
