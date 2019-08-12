import React from 'react';
import Nav from './Nav';
import twitter from '../twitter.png';
import fb from '../fb.jpg';
import lnk from '../linkedIn.png';
import github from '../github.png';


function Contact() {
    
        return (
            <>
            <div className='head'>Contact</div>
            <div className='displayBox'>
                <h2 id='contactHead'>Please get in touch!</h2>
                <div id='info'>
                    <p> <strong>Email:</strong> hallie.dunn1@gmail.com</p>
                    <p> <strong>Mobile:</strong> 937.304.5738</p>
                    <br/>
                    <p>I'd love to chat about your projects, my projects, cool new frameworks, secret old trade tricks, or anything related to the sci-fi genre.</p>
                </div>
                <div id='contactBox'>
                    <img src={twitter}></img>
                    <img src={fb}></img>
                    <img src={lnk}></img>
                    <img src={github}></img>
                </div>
            </div>
            <Nav/>
            </>
        )
}

export default Contact;