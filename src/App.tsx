import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import ForgetPassword from './pages/ForgetPassword';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth/*' element={<LoginPage />} />
          <Route path='/forgetPassword' element={<ForgetPassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App