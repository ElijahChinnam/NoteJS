import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Edit from './pages/Edit'
import Create from './pages/Create'
import UserContext from './contexts/UserContext'
import NotesContext from './contexts/NotesContext'
import Login from './pages/Login'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'
import PublicNotes from './pages/PublicNotes'
import PublicNotesContext from './contexts/PublicNotesContext'

function App() {

  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [publicNotes, setPublicNotes] = useState([]);

  return (
    <>
      <PublicNotesContext.Provider value={{ publicNotes, setPublicNotes }}>
        <NotesContext.Provider value={{ notes, setNotes }}>
          <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<RootLayout />} children={
                  [
                    <Route path='' element={<Home />} key="home" />,
                    <Route path='/home' element={<Home />} key="home" />,
                    <Route path='/dashboard' element={<Dashboard />} key="dashboard" />,
                    <Route path='/publicNotes' element={<PublicNotes />} key="publicNotes" />,
                    <Route path='/about' element={<About />} key="about" />,
                    <Route path='/edit' element={<Edit />} key="edit" />,
                    <Route path='/edit/:id' element={<Edit />} key="edit" />,
                    <Route path='/create' element={<Create />} key="create" />,
                    <Route path='/login' element={<Login />} key="login" />,
                    <Route path='/register' element={<Register />} key="register" />,
                    <Route path='/userProfile' element={<UserProfile />} key="userProfile" />
                  ]
                }></Route>
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </NotesContext.Provider>
      </PublicNotesContext.Provider>
    </>
  )
}

export default App