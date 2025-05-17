import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Componants/Home';
import Navbar from './Componants/Navabr';
import LoginSignUP from './Componants/LoginSignUp';
import Dashbord from './Componants/Dashboard';
import { logoutUser, observeUser, setUser } from './utils/authSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DashboardNavbar from './Componants/Dashboard/DashboardNavbar';
import Dashboard from './Componants/Dashboard';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = observeUser((user) => {
      if (user) {
        dispatch(setUser({ email: user.email, uid: user.uid, name: user.displayName }));
      } else {
        dispatch(logoutUser());
      }
    });
  
    return () => unsubscribe();
  }, []);
  

  return (
    <div className='bg-white '>
    <Router>
      <Navbar />
      <Dashboard/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/loginSignup' element= {<LoginSignUP/>} />
        <Route path='/dashboard' element={<Dashbord/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
