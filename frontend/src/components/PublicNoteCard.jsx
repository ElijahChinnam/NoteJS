import React from 'react'
import { useNavigate } from 'react-router-dom';

function NoteCard(props) {
    
    return (
        <>
            <div className='w-96 h-72 bg-gray-900 rounded-lg shadow-lg m-auto mt-20 hover:scale-101'>
                <div className='w-full bg-blue-500 h-2 rounded-t-lg'></div>
                <h1 className='text-sky-500 p-5 text-2xl'>{props.note.title}</h1>
                <hr className='text-blue-500 mx-5'/>
                <div className='w-full overflow-hidden border-white h-40 pt-5'>
                    <p className='text-white px-5'>{props.note.note}</p>
                </div>
                <div className='flex mt-2'>
                    <p className='text-gray-500 ml-5'>by {props.note.username}</p>
                </div>
            </div>
        </>
    )
}

export default NoteCard