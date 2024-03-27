import React from 'react';
import { Link } from 'react-router-dom';

function BackButton({ desitnation = '/' }) {
    return (
        <div className="flex">
            <Link
                to={desitnation}
                className='px-5 py-2 bg-slate-200 shadow-md rounded-md active:shadow-none'
            >
                back
            </Link>
        </div>
    )
}

export default BackButton