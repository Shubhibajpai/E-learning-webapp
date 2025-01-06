import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import '../compocss/navbar.css';


export default function Navbar(props) {
  const[isNavVisible,setIsNavVisible]=useState(false);
  const handleNavToggle =()=>
  {
    setIsNavVisible((prevState)=>!prevState);
  };
  return (
    <div>
      <div className="nav_container">
        <div className="left_nav">
            <button className="btn-icon"onClick={handleNavToggle}><i className="fa-solid fa-bars"></i></button>
            <p>SkillCraft</p>
        </div>
        <div className="right_nav">
            <ul className={`${isNavVisible? 'apper':'disappear'}`}>
            <li><Link to="/">Home</Link></li>
               {props.isLoggedIn?<li><Link to="/notes">Notes</Link></li>:null}
               {props.isLoggedIn?<li><Link to="/resource">Resource</Link></li>:null}
               {props.isLoggedIn?<li><Link to="/contact">Contact Us</Link></li>:null}
               {!props.isLoggedIn?(
                <li><Link to="/Login">
                Login
              </Link></li>
               ):(
                <>
                <li><button className='btn1' onClick={props.onLogout}>Logout</button></li>
                </>
               )}
            </ul>
        </div>
    </div>
    </div>  
  )
}
