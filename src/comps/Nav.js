import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom'

function Nav() {
    // containerElement={<NavLink to="/projects" />}
        return (
            <MenuList className='menu'>
                <Link to='/home' className='links'><MenuItem className='temp'>About</MenuItem></Link>
                <Link to='/projects' className='links'><MenuItem className='temp'>Projects</MenuItem></Link>
                <Link to='/contact' className='links'><MenuItem className='temp'>Contact</MenuItem></Link>
                <Link to='/other' className='links'><MenuItem className='temp'>Other</MenuItem></Link>
            </MenuList>
        )
}

export default Nav;