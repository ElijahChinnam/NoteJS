import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext';

function Home() {

  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
    <div>
      <div className='bg-gray-800 h-screen'>
        <h1 className='text-white text-4xl text-center pt-40'>Welcome to Notes Application</h1>
        <p className='text-white text-center pt-5'>This is a simple Notes Application built using MERN Stack</p>
        <p className='text-white text-center pt-5'>You can create, read, update and delete notes</p>
        <div className="flex justify-center pt-10">
          <Link to='/dashboard'>
            <button className="text-sky-500 border px-5 py-3 rounded hover:cursor-pointer hover:text-sky-700">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home