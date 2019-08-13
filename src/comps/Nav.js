import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
        return (
            <div className='menu'>
                <Link to='/home' className='links'>About</Link>
                <Link to='/projects' className='links'>Projects</Link>
                <Link to='/contact' className='links'>Contact</Link>
                {/* <Link to='/other' className='links'>Other</Link> */}
                <Link to='/resume' className='links'>Resume</Link>
            </div>
        )
}

export default Nav;