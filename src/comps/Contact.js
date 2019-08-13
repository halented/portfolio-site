import React from 'react';
import Nav from './Nav';
import twitter from '../images/twitter.png'
import fb from '../images/fb.jpg'
import lnk from '../images/linkedIn.png'
import github from '../images/github.png'


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
                    <img src={twitter}alt='twitter icon' onClick={()=>window.open(`https://www.twitter.com/coyodeHal`, '_blank')}></img>
                    <img src={fb}alt='facebook icon' onClick={()=>window.open(`https://www.facebook.com/halliebeth`, '_blank')}></img>
                    <img src={lnk}alt='linkedIn icon' onClick={()=>window.open(`https://www.linkedin.com/in/halented/`, '_blank')}></img>
                    <img src={github}alt='github icon' onClick={()=>window.open(`https://github.com/halented`, '_blank')}></img>
                </div>
            </div>
            <Nav/>
            </>
        )
}

export default Contact;