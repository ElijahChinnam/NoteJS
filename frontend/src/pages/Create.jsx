import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function Create() {

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [type, setType] = useState('private');
  const [tags, setTags] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleCreate(e) {

    e.preventDefault();
    console.log(type);

    let response = await fetch('http://localhost:3000/notes-api/create', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: user.username, title: title, note: note, type: type })
    });
    let data = await response.json();
    if (data.message == 'Note Created') {
      navigate('/dashboard');
    }

  }

  return (
    <>
      <h1 className="text-white bg-gray-800 text-3xl text-center pt-20">Create New Note</h1>
      <div className="h-screen">
        <div className="h-full bg-gray-800 p-20 flex justify-center">
          <div className="w-1/2">
            <form onSubmit={handleCreate}>
              <label htmlFor="Title" className="text-white text-xl">Title</label>
              <br />
              <input
                type="text" id="title_id"
                className="border border-white w-full text-white p-3 text-1xl rounded " onChange={(e) => { setTitle(e.target.value) }} />
              <br />
              <br />
              <label htmlFor="Note" className="text-white text-xl">Note</label>
              <br />
              <textarea name="" id="note_id"
                className="border border-white w-full text-white p-3 text-1xl rounded h-40" onChange={(e) => { setNote(e.target.value) }}></textarea>
              <br />
              <input type="radio" name="type" id="private" value={"private"} defaultChecked="True" onChange={(e)=>{setType(e.target.value)}}/> <label htmlFor="private" className='text-white'>Private</label> &nbsp;
              <input type="radio" name="type" id="public" value={"public"} onChange={(e)=>{setType(e.target.value)}}/> <label htmlFor="public" className='text-white'>Public</label>
              <div className="mt-2">
                <button type="submit" className="text-white border border-sky-500 p-1 rounded hover:cursor-pointer hover:border-sky-700 hover:text-sky-700 px-5 py-2">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Create