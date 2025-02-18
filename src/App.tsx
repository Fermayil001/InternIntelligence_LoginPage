// import { FormEvent, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
// import { register } from './fireBase'
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import { useAppSelector } from './redux/hooks/hooks';
import Home from './pages/home';

function App() {

  const { isLoggedIn } = useAppSelector(state => state.auth.isLoggedIn)

  return (
    <>
      <Router>
        <Routes>
          {/* {isLoggedIn && <Route path='/' element={<Home/> } />} */}
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App



/* 
<div className=' flex'>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          Email
          <input
            className='border'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          Password
          <input
            className='border'
            type="password"
            value={password}
            onChange={(e) => setPAssword(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
*/