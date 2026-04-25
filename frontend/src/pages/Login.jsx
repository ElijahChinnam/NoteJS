import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

function Login() {

    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {

        e.preventDefault();

        let response = await fetch('http://localhost:3000/user-api/login',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username: username, password: password })
            }
        );

        const data = await response.json();
        console.log(data);
        if (data?.message === "user not found") {
            document.getElementById('message').innerHTML = 'Please check your login credentials';
            return;
        }
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');

    }

    async function fetchUser() {
        const token = localStorage.getItem('token');
        let response = await fetch('http://localhost:3000/user-api/fetchUser',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ token: token })
            }
        );
        const data = await response.json();
        console.log(data);
        setUser(data);
        navigate('/home');
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUser();
        }
    }, []);

    return (
        <>
            <div className='w-[99vw] min-h-screen flex justify-center items-center bg-gray-800 text-sky-100'>
                <div className='rounded border w-1/3 flex flex-col p-5 bg-gray-800 shadow-lg'>
                    <h1 className='text-center text-2xl mb-5'>Login</h1>
                    <form className='text-md' onSubmit={handleSubmit}>
                        <p id='message' className='text-red-500 text-center'></p>

                        <label htmlFor="username">Username</label> <br />
                        <input type="text" className='w-full border rounded p-1 mb-5' id='username' onChange={(e) => { setUsername(e.target.value) }} />

                        <label htmlFor="password">Password</label> <br />
                        <input type="password" className='w-full border rounded p-1 mb-5' id='password' onChange={(e) => { setPassword(e.target.value) }} />

                        <button type='submit' className='bg-sky-700 text-white px-3 py-1 rounded w-full hover:bg-blue-80 hover:cursor-pointer active:scale-95 mb-3'>Login</button>

                        <p className=''>Don't have an account? <Link to='../register' className='text-sky-500 hover:underline'>Register Here</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login