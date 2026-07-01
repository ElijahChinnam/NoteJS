import React, { useContext, useEffect } from 'react'
import UserContext from '../contexts/UserContext';
import NotesContext from '../contexts/NotesContext';
import { Link, useNavigate } from 'react-router-dom';
import NoteCard from '../components/NoteCard';

function Dashboard() {

  const { user, setUser } = useContext(UserContext);
  const { notes, setNotes } = useContext(NotesContext);
  const navigate = useNavigate();

  async function fetchNotes() {
    let response = await fetch('http://localhost:3000/notes-api/notes', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: user.username })
    })
    const data = await response.json();
    setNotes(data);
  }

  useEffect(() => {

    const fetchUser = async () => {
      if (!user) {
        navigate('/publicNotes');
      } else {
        fetchNotes();
      }
    }

    fetchUser();
  }, []);

  return (
    <>
      <div className=' bg-gray-800 h-full pb-10'>
        <h1 className='text-white text-3xl text-center pt-20'><Link to='/publicNotes' className='hover:text-blue-500'>Public Notes</Link> / My Notes</h1>
        <div className='min-h-screen'>
          <div className='grid grid-cols-3 pt-10 h-full'>
            {
              notes.map((note) => <NoteCard key={note._id} note={note} fetchNotes={fetchNotes} />)
            }
            <>
              <div className='w-96 h-72 bg-gray-900 rounded-lg shadow-lg m-auto mt-20 hover:scale-101 hover:cursor-pointer' onClick={() => navigate('/create')}>
                <div className='w-full bg-blue-500 h-2 rounded-t-lg'></div>
                  <div className='w-full h-65 flex justify-center items-center'>
                    <h1 className='text-white text-5xl font-bold hover:text-blue-500'>+</h1>
                  </div>
                  <p className='text-white text-center relative bottom-20'>Create New Note</p>
              </div>
            </>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard