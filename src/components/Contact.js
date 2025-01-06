// import React from 'react'
import '../compocss/contact.css';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Contact() {
       const[name ,setName]=useState('')
        const[email,setEmail]=useState('')
        const[message ,setMessage]=useState('')
        const navigate = useNavigate()

      const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:3001/contact',{name,email,message})
        .then(result=> console.log(result))
        .catch(err=>console.log(err))
        navigate('/')
      }

  return (
    <>   
     <div>
       <header >
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Whether you have a question, suggestion, or feedback, we're here to help.</p>
        </div>
      </header>
      <section className="contact-form-section"/>
        <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form action="submit_form.php" method="POST" onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="Enter your name"
              onChange={(e)=> setName(e.target.value)}/>
        
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="Enter your email"
              onChange={(e)=> setEmail(e.target.value)}/>
        
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Write your message here..."onChange={(e)=> setMessage(e.target.value)}/><br/>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
             <footer>
                <div className="container">
                  <p>&copy; 2024 E-Learning Platform. All rights reserved.</p>
                </div>
              </footer>
    </div>
    </>
  )
}
