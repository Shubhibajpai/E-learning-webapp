import React from 'react'
import '../compocss/home.css';

// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "Home_img/bg3.jpg", 
    "Home_img/img2.jpg", 
    "Home_img/img3.jpg", 
    "Home_img/img4.jpg"
  ];
  
  const totalImages = images.length;  
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval); 
  }, [totalImages]);



  return (
    <div className="Homesection1">

      <div className="img" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <img key={index} className="images" src={src} alt={`slider-image-${index}`} />
        ))}
      </div>

        {/* <div className="btnlogin">
          <Link to="/Login">
            <button>Login</button>
          </Link>
          <Link to="/Signup">
           <button>Sign Up</button>
          </Link>
            
        </div> */}
        <div className="text">
            <p className="quote">"Live as if you were to die tomorrow.<br/>Learn as if you were to live forever."</p>
            <p className="name">-Mahatma Gandhi</p>
        </div>
    </div>
  )
}