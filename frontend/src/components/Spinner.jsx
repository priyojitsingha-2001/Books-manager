import React from 'react'

export default function Spinner() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-16 h-16 m-8 animate-ping rounded-full bg-sky-600"></div>
        </div>
    )
}
