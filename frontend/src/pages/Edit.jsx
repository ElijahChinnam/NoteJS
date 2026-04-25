import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Edit() {

  let location = useLocation();
  let obj = location.state || null;

  const [title, setTitle] = useState(obj.title);
  const [note, setNote] = useState(obj.note);
  const [type, setType] = useState(obj.type);
  const navigate = useNavigate();

  async function handleEdit(e) {

    e.preventDefault();

    let response = await fetch('http://localhost:3000/notes-api/edit', {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ _id: obj._id, title: title, note: note, type: type })
    });
    let data = await response.json();
    if (data.message === 'Note Updated') {
      navigate('/dashboard');
    }

  }

  return (
    <>
      <h1 className="text-white bg-gray-800 text-3xl text-center pt-20">Edit Note</h1>
      <div className="h-screen">
        <div className="h-full bg-gray-800 p-20 flex justify-center">
          <div className="w-1/2">
            <form onSubmit={handleEdit}>
              <label htmlFor="Title" className="text-white text-xl">Title</label>
              <br />
              <input
                type="text" id="title_id"
                className="border border-white w-full text-white p-3 text-1xl rounded " defaultValue={title} onChange={(e) => { setTitle(e.target.value) }} />
              <br />
              <br />
              <label htmlFor="Note" className="text-white text-xl">Note</label>
              <br />
              <textarea name="" id="note_id"
                className="border border-white w-full text-white p-3 text-1xl rounded h-40" defaultValue={note} onChange={(e) => { setNote(e.target.value) }}></textarea>
              <br />
              <input type="radio" name="type" id="private" value={"private"} checked={type === 'private'} onChange={(e)=>{setType(e.target.value)}}/> <label htmlFor="private" className='text-white'>Private</label> &nbsp;
              <input type="radio" name="type" id="public" value={"public"} checked={type === 'public'} onChange={(e)=>{setType(e.target.value)}}/> <label htmlFor="public" className='text-white'>Public</label>
              <div className="mt-2">
                <button type="submit" className="text-white border border-sky-500 p-1 rounded hover:cursor-pointer hover:border-sky-700 hover:text-sky-700 px-5 py-2">Save</button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Edit