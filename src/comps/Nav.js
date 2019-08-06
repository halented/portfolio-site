import React from 'react'
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom'

function Nav() {
        return (
            <div className='menu'>
                <Link to='/home' className='links'>About</Link>
                <Link to='/projects' className='links'>Projects</Link>
                <Link to='/contact' className='links'>Contact</Link>
                <Link to='/other' className='links'>Other</Link>
            </div>
        )
}

export default Nav;