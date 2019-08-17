import React from 'react';
import Nav from './Nav';
import twitter from '../images/twitter.png'
import dev from '../images/dev.png'
import lnk from '../images/linkedIn.png'
import github from '../images/github.png'


function Contact() {
    
        return (
            <>
            <div className='head'>Contact</div>
            <div className='displayBox'>
                <h2 id='contactHead'>Please get in touch!</h2>
                <div id='info'>
                    <p> <strong>Email:</strong> heyHal@halented.com</p>
                    <p> <strong>Mobile:</strong> 937.304.5738</p>
                    <br/>
                    <p>I'd love to chat about your projects, my projects, cool new frameworks, secret old trade tricks, or anything related to the sci-fi genre.</p>
                </div>
                <div id='contactBox'>
                    <img className='socials' src={twitter}alt='twitter icon' onClick={()=>window.open(`https://www.twitter.com/coyodeHal`, '_blank')}></img>
                    <img className='socials' src={dev}alt='dev.to icon' onClick={()=>window.open(`https://dev.to/halented`, '_blank')}></img>
                    <img className='socials' src={lnk}alt='linkedIn icon' onClick={()=>window.open(`https://www.linkedin.com/in/halented/`, '_blank')}></img>
                    <img className='socials' src={github}alt='github icon' onClick={()=>window.open(`https://github.com/halented`, '_blank')}></img>
                </div>
            </div>
            <Nav/>
            </>
        )
}

export default Contact;