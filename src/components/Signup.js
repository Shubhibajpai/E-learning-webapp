// import React from 'react'
import '../compocss/signup.css';
import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
    // for backend
      const[firstname ,setFirstname]=useState('')
      const[lastname,setLastname]=useState('')
      const[email,setEmail]=useState('')
      const[password,setPassword]=useState('')
      const[confirmpw,setConfirmpw]=useState('')
      const navigate = useNavigate()

      const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:3001/register',{firstname,lastname,email,password,confirmpw})
        .then(result=> console.log(result))
        .catch(err=>console.log(err))
        navigate('/')
      }
  return (
    <>
      <div className="createmain">
        <div className="form1">
        <form className="formfield"  method="post" onSubmit={handleSubmit}>
        <h1 className="head">Sign Up</h1><br/><br/>
        <div>
        <input type="text"className="lastname" name="firstname" placeholder="first name"
        onChange={(e)=> setFirstname(e.target.value)}/>
        <input type="text"className="lastname" name="lastname"placeholder="Last name"
        onChange={(e)=> setLastname(e.target.value)}/>
        <br/><br/></div>
        <input type="email"className="input1" name="email"  placeholder="Email"
        onChange={(e)=> setEmail(e.target.value)}/>
        <br/>
        <input type="password" className="input1" name="password"  placeholder="Password"
        onChange={(e)=> setPassword(e.target.value)}/>
        <br/>
        <input type="password" className="input1" name="confirmpw" placeholder="Confirm password"
        onChange={(e)=>setConfirmpw (e.target.value)}/>
        <br/>
        <button className="btn">Sign up</button>
        <br/>
        <p className="para">Already have an account? <Link to="/login">Login here</Link></p>
        </form>
        </div>
      </div>
    </>
  )
}
