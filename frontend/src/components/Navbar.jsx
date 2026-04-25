import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

function Navbar() {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className='h-14 bg-gray-900 fixed w-screen flex justify-between'>

      <div className='flex items-center'>
        <Link to='/home'>
          <h1 className='ml-14'><span className='text-white text-2xl'>Note</span><span className='text-sky-500 text-2xl'>JS</span></h1>
        </Link>

      </div>

      <div>
        <div className='flex justify-end mr-14 mt-4 text-white'>
          <ul className='flex gap-10'>
            <NavLink to='/home' className='hover:text-sky-500'>Home</NavLink>
            <NavLink to='/dashboard' className='hover:text-sky-500'>Dashboard</NavLink>
            <NavLink to='/about' className='hover:text-sky-500'>About</NavLink>
          </ul>
        </div>
      </div>

      <div>
        {
          user ?
            <>
              <div className='flex items-center h-full mr-10'>
                <button className='text-white hover:text-sky-500 hover:cursor-pointer' onClick={() => { navigate('/userProfile') }}>{user.username}</button>
              </div>
            </>
            :
            <>
              <div className='flex items-center h-full mr-3'>
                <button className='text-white mr-5 hover:text-sky-500 hover:cursor-pointer' onClick={() => navigate('/login')}>Login</button>
                <button className='text-white mr-5 hover:text-sky-500 hover:cursor-pointer' onClick={() => navigate('/register')}>Register</button>
              </div>
            </>
        }
      </div>
    </div>
  )
}

export default Navbar