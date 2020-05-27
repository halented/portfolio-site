import React from 'react'
import me from '../images/closeup.png';
import { Link } from 'react-router-dom'

function Nav() {
        return (
            <>
            <img src={me} alt='its me' id='me'></img>
            <div className='menu'>
                <Link to='/home' className='links'>About</Link>
                <Link to='/projects' className='links'>Projects</Link>
                <Link to='/contact' className='links'>Contact</Link>
                <a href="https://www.canva.com/design/DADzi9s9gW8/GNswvIF4os0mdqZKFSNokw/view?utm_content=DADzi9s9gW8&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank" rel="noopener noreferrer" className='links'>Resume</a>
            </div>
            </>
        )
}

export default Nav;