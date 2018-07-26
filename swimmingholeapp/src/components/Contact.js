import React from 'react';
import '../App.css';


function Contact() {


    return (
      
       <div className="contactLinksContainer">
        <a  className="contactLinks" href="mailto:nathanhbsimmons@gmail.com" className="fa fa-envelope fa-md" alt='envelope logo'> </a>
        <a className="contactLinks" href="https://www.linkedin.com/in/nathan-simmons-114b5695/" target="_blank" className="social fab fa-linkedin fa-md" alt='linkedin logo'> </a>
        <a className="contactLinks" href="https://github.com/nathanhbsimmons/finalproject/tree/master/swimmingholeapp" target="_blank" className="social fab fa-github fa-md" alt='github logo'> </a>
        </div>
     

    );
  
}

export default Contact;
