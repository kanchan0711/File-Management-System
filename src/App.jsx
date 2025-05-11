import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Componants/Home';
import Navbar from './Componants/Navabr';
import LoginSignUP from './Componants/LoginSignUp';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/loginSignup' element= {<LoginSignUP/>} />
      </Routes>
    </Router>
  )
}

export default App
