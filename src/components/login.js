import React, {useState } from 'react'
import '../compocss/login.css';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function login(props){
  // for backend
    const[email ,setEmail]=useState()
    const[password,setPassword]=useState()
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
      e.preventDefault()
      axios.post('http://127.0.0.1:3001/login',{email,password})
     .then(result=>{
      console.log(result)
      if(result.data==="Success"){
        props.setIsLoggedIn(true);
        navigate('/')
      }
     })
     .catch(err=>console.log(err))
    }
  return (
    <>
    
      <div className="main">
      <div className="form" onSubmit={handleSubmit} method="post">
        <form className="formfield" method="POST" >
            <h2 className="head">Login Here</h2><br/><br/>
            <label className="label">Email</label>
            <input type="email" name="email" className="input"placeholder="Enter your email"
             onChange={(e)=> setEmail(e.target.value)}/>
            <br/><br/>
            <label className="label">Password</label>
            <input type="text"name="password" className="input" placeholder="Enter password"
            onChange={(e)=> setPassword(e.target.value)}/>
            <br/><br/>
            <button className="btn">Login</button><br/>
            <p className="para">Don't have an account? <Link to="/signup"> Sign Up</Link></p>
        </form>
        </div>
        </div>
    </>
  )
}
