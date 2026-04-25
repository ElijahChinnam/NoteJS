import React from 'react'
import { useNavigate } from 'react-router-dom';

function NoteCard(props) {

    const navigate = useNavigate();

    async function deleteNote() {

        let response = await fetch('http://localhost:3000/notes-api/delete', {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: props.note._id })
        });
        let data = await response.json();
        props.fetchNotes();

    }

    return (
        <>
            <div className='w-96 h-72 bg-gray-900 rounded-lg shadow-lg m-auto mt-20 hover:scale-101'>
                <div className='w-full bg-blue-500 h-2 rounded-t-lg'></div>
                <h1 className='text-sky-500 p-5 text-2xl'>{props.note.title}</h1>
                <hr className='text-blue-500 mx-5'/>
                <div className='w-full overflow-hidden border-white h-40 pt-5'>
                    <p className='text-white px-5'>{props.note.note}</p>
                </div>
                <div className='flex justify-end mt-2'>
                    <button className='border rounded px-3 mr-3 relative bottom-2 right-1 hover:cursor-pointer text-sky-500 hover:text-sky-600 py-1' onClick={() => navigate(`/edit/${props.note._id}`, {state: props.note})}>Edit</button>
                    <button className='border rounded px-3 mr-3 relative bottom-2 right-1 hover:cursor-pointer text-red-500 hover:text-red-700 py-1' onClick={() => deleteNote()}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default NoteCard