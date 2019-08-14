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
                <Link to='/resume' className='links'>Resume</Link>
            </div>
            </>
        )
}

export default Nav;