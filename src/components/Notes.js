import React from 'react'
import {Link} from 'react-router-dom';
import '../compocss/notes.css';
import osimg from '../Notes_img/OS.jpg';
import cnimg from '../Notes_img/cn.avif';
import cryptoimg from '../Notes_img/cryptography.avif';
import cssimg from '../Notes_img/css.png';
import djimg from '../Notes_img/django.webp';
import dsaimg from '../Notes_img/DSA.jpg';
import htmlimg from '../Notes_img/HTML.png';
import javaimg from '../Notes_img/Java.jpg';
import jspimg from '../Notes_img/JSP.png';
import monimg from '../Notes_img/MongoDb.jpg';
import phpimg from '../Notes_img/PHP.jpg';
import pythonim from '../Notes_img/python.jpg';
import reimg from '../Notes_img/reactjs.png';
import sqlimg from '../Notes_img/sql.jpg';

export default function Notes() {
  return (
    <div>
       <div className="notesection">
   <h1 className="mid">Notes Section</h1>
   <div className="div-section"> 
      <div className="div1">
         <img src={cnimg} alt="Computer n/w" />
         <a href="https://drive.google.com/file/d/1yEVxjQBoUBxaOKXSvsb-rsDLxGt6c02f/view?usp=drive_link" target="_blank">Download Notes</a>
         <h2>Computer Networks</h2>
      </div>
      <div className="div1">
      <img src={cryptoimg} alt="Crypto notes"/>
      <a href="https://drive.google.com/file/d/1DNbbOpRfoFNtvKvMCpoCsU7oWktxKEzE/view?usp=drive_link" target="_blank">Download Notes</a>
      <h2>Cryptography</h2>
   </div>
   <div className="div1">
      <img src={cssimg} alt="Css notes"/>
      <a href="https://drive.google.com/file/d/10dm8DahudvqlTtRIdzIhwpYx4OgP1I5P/view?usp=drive_link" target="_blank">Download Notes</a>
      <h2>CSS Notes</h2>
   </div>
   <div className="div1">
      <img src={djimg}/>
      <a href="https://drive.google.com/file/d/1lErvRz3ZUGL2ewJPVRENq-eGkTqX77Xu/view?usp=drive_link" target="_blank">Download Notes</a>
      <h2>DJango </h2>
   </div>
   <div className="div1">
      <img src={dsaimg}/>
      <a href="https://drive.google.com/file/d/10eXcJAgyKOlLMA3Ky_a1FgHwuFczZ-BP/view?usp=drive_link" target="_blank">Download Notes</a>
      <h2>DSA</h2>
   </div>
   <div className="div1">
      <img src={htmlimg}/>
      <a href="https://drive.google.com/file/d/1qTxlD8TLXQyj56nB5Whp3otuQid7wARn/view?usp=drive_link" target="_blank">Download Notes</a>
      <h2>HTML</h2>
   </div>
   <div className="div1">
      <img src={javaimg}/>
      <a href="https://drive.google.com/file/d/1FVcKDBfafVjI9Ce7ReAkoK9POSybt5Kk/view?usp=drive_link" target="_blank">Download Notes</a>
      <h2>Java</h2>
   </div>

   <div className="div1">
      <img src={jspimg}/>
      <a href="https://drive.google.com/file/d/14p_l6weCXrvjT3McKosy5ewQUEWCt31S/view?usp=drive_link" target="_blank">Download Notes</a>
      <h2>JSP</h2>
   </div>
   <div className="div1">
      <img src={monimg}/>
      <a href="https://drive.google.com/file/d/1Wbjs-VShSqro4Yf7AUHP__HBWRcYoblj/view?usp=drive_link" target="_blank">Download Notes</a>
      <h2>MongoDb</h2>
   </div>
   <div className="div1">
      <img src={osimg} />
      <a href="https://drive.google.com/file/d/14ysba40oP5NgYkR3aORpQtAOgdiBAXut/view?usp=drive_link" target="_blank">Download Notes</a>
      <h2>Operating System</h2>
   </div>
   <div className="div1">
      <img src={phpimg}/>
      <a href="https://drive.google.com/file/d/19GfmK1pNriYMT3MQTxhbwwEZ6-NxsdVb/view?usp=drive_link" target="_blank">Download Notes</a>
      <h2>PHP</h2>
   </div>
   <div className="div1">
      <img src={pythonim}/>
      <a href="https://drive.google.com/file/d/1bdy1cMfRMLz6M8yvjUCqT4wGuNC-uO1u/view?usp=drive_link" target="_blank">Download Notes</a>
      <h2>python</h2>
   </div>
   <div className="div1">
      <img src={reimg}/>
      <a href="https://drive.google.com/file/d/1HwkFXvgr0VZN8uFmn3weOM9naXkDgV-q/view?usp=drive_link" target="_blank">Download Notes</a>
      <h2>React JS</h2>
   </div>
   <div className="div1">
      <img src={sqlimg}/>
      <a href="https://drive.google.com/file/d/10PcbsH_osFMKdlpOD6zAtfgvBwB6ox8P/view?usp=drive_link" target="_blank">Download Notes</a>
      <h2>Sql</h2>
   </div>
   
   </div>

</div>     
    </div>
  )
}
