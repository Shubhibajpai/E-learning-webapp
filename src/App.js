
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import Resource from './components/Resource';
import Contact from './components/Contact';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const[isLoggedIn,setIsLoggedIn] = useState(false);

  const handleLogout=()=>
  {
    setIsLoggedIn(false);
  }
  return (
    <>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
