import React, { useContext, useEffect } from 'react'
import PublicNoteCard from '../components/PublicNoteCard';
import PublicNotesContext from '../contexts/PublicNotesContext';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

function PublicNotes() {

    const { publicNotes, setPublicNotes } = useContext(PublicNotesContext);
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchPublicNotes(){
            try {
                const response = await fetch('http://localhost:3000/notes-api/publicNotes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setPublicNotes(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPublicNotes();
    }, []);

  return (
    <>
        <div className=' bg-gray-800 h-full pb-10'>
        <h1 className='text-white text-3xl text-center pt-20'>Public Notes / <a className='hover:text-blue-500 hover:cursor-pointer' onClick={()=>{(!user) ? navigate('/login') : navigate('/dashboard')}}>My Notes</a></h1>
        <div className='min-h-screen'>
          <div className='grid grid-cols-3 pt-10 h-full'>
            {
              publicNotes.map((note) => <PublicNoteCard key={note._id} note={note}/>)
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default PublicNotes