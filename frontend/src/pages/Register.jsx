import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function handleSubmit(e) {

    e.preventDefault();

    let response = await fetch('http://localhost:3000/user-api/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, email: email, password: password })
    });

    const data = await response.json();
    if (data.message == 'error') {
      document.getElementById('message').innerHTML = 'Something went wrong';
    } else {
      navigate('/home');
    }

  }

  return (
    <>
      <div className='w-[99vw] min-h-screen flex justify-center items-center bg-gray-800 text-white'>
        <div className='rounded border w-1/3 flex flex-col p-5 bg-gray-800 shadow-lg'>
          <h1 className='text-center text-2xl mb-5'>Register</h1>
          <p className='text-center text-red-500' id='message'></p>
          <form className='text-md' onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label> <br />
            <input type="text" className='w-full border rounded p-1 mb-5' id='username' onChange={(e) => { setUsername(e.target.value) }} />

            <label htmlFor="email">Email</label> <br />
            <input type="email" className='w-full border rounded p-1 mb-5' id='email' onChange={(e) => { setEmail(e.target.value) }} />

            <label htmlFor="password">Password</label> <br />
            <input type="password" className='w-full border rounded p-1 mb-5' id='password' onChange={(e) => { setPassword(e.target.value) }} />

            <button type='submit' className='bg-sky-700 text-white px-3 py-1 rounded w-full hover:bg-blue-80 hover:cursor-pointer active:scale-95 mb-3'>Register</button>

            <p className=''>Already having an account? <Link to='../login' className='text-sky-500 no-underline hover:underline'>Login Here</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register