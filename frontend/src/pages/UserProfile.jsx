import React, { useContext, useEffect } from 'react'
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function UserProfile() {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  let username = '';
  let email = '';
  let password = '';

  function handleLogout() {
    localStorage.removeItem('token');
    setUser(null);
  }

  async function handleDelete() {
    let response = await fetch('http://localhost:3000/user-api/delete',
      {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
    );
    console.log(response);
    setUser(null);
    localStorage.removeItem('token');
  }

  async function handleUpdate() {
    let object = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    }
    let response = await fetch('http://localhost:3000/user-api/update',
      {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
      }
    )
    console.log(response);
    if (response) {
      let response = await fetch('http://localhost:3000/user-api/login',
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(object)
        }
      );
      const data = await response.json();
      setUser(data);
      return;
    }
  }

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user]);

  username = user?.username;
  email = user?.email;
  password = user?.password;

  return (
    <>
      <div className='w-[99vw] pt-5 bg-gray-800 min-h-screen text-center flex justify-center items-center text-white'>
        <div className='border w-1/3 p-10 bg-gray-800 rounded shadow-md'>
          <h1 className='text-center text-2xl mb-5'>User Profile</h1>
          <table className='w-full mb-5'>
            <thead>
              <tr>
                <th className='border'>Property</th>
                <th className='border'>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border'>Username</td>
                <td className='border'><input type="text" defaultValue={username} className='w-full px-1' id='username' contentEditable='true'/></td>
              </tr>
              <tr>
                <td className='border'>Email</td>
                <td className='border'><input type="text" defaultValue={email} className='w-full px-1' id='email' contentEditable='true'/></td>
              </tr>
              <tr>
                <td className='border'>Password</td>
                <td className='border'><input type="text" defaultValue="" className='w-full px-1' id='password' contentEditable='true'/></td>
              </tr>
            </tbody>
          </table>
          <p id='message' className='text-blue-500'></p>
          <div className='flex justify-center gap-5'>
            <button className='bg-blue-700 text-white px-3 py-1 rounded hover:cursor-pointer hover:bg-blue-500 active:scale-95' onClick={handleUpdate}>Update</button>
            <button className='bg-red-500 text-white px-3 py-1 rounded hover:cursor-pointer hover:bg-red-700 active:scale-95' onClick={handleLogout}>Logout</button>
            <button className='bg-red-700 text-white px-3 py-1 rounded hover:cursor-pointer hover:bg-red-900 active:scale-95' onClick={handleDelete}>Delete Account</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile