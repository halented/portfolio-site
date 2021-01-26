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
                <a href="https://www.canva.com/design/DAEURCynL2w/7MzSvI2MK6ElONcCjpZs6g/view?utm_content=DAEURCynL2w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noopener noreferrer" className='links'>Resume</a>
            </div>
            </>
        )
}

export default Nav;