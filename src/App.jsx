import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Componants/Home';
import Navbar from './Componants/Navabr';
import LoginSignUP from './Componants/LoginSignUp';
import Dashbord from './Componants/Dashboard';
import { logoutUser, observeUser, setUser } from './utils/authSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from './Componants/Dashboard';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = observeUser((user) => {
      if (user) {
        dispatch(setUser({ email: user.email, uid: user.uid, name: user.displayName }));
      } else {
        dispatch(logoutUser());
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>; // Prevents route jump on refresh

  return (
    <div className='bg-gradient-to-br from-blue-100 via-white to-purple-200 '>
    <Router>
      <Navbar />
      {/* <Dashboard/> */}
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
