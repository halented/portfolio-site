import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Divider } from 'antd';
import { CloseCircleOutlined, DownCircleOutlined } from '@ant-design/icons';
import { styles } from './styles'

const SiteMenu = () => {
  const [menuOpen, setmenuOpen] = useState(false)

  const toggleMenu = () => {
    setmenuOpen(prev => !prev)
  }

  const allMenuOptions = () => {
    return (
      <>
        <CloseCircleOutlined style={{ fontSize: '25px', color: 'rgb(70,70,70)' }} onClick={toggleMenu} aria-label='close menu button' />
        <Menu
          style={styles.dropdown}
          onClick={toggleMenu}
        >
          <Menu.Item key="1" className='menuItem' style={styles.menuItem}>
            <Link to='/'>
              About
            </Link>
          </Menu.Item>
          <Menu.Item key="2" className='menuItem' style={styles.menuItem}>
            <Link to='/contact'>
              Contact
          </Link>
          </Menu.Item>
          <Menu.Item key="3" className='menuItem' style={styles.menuItem}>
            <Link to='/projects'>
              Projects
          </Link>
          </Menu.Item>
          <Menu.Item key="4" style={styles.menuItem}>
            <Link to='/dog-pics' className='menuItem'>
              Dog Pics
          </Link>
          </Menu.Item>
          <Menu.Item key="5" className='menuItem' style={styles.menuItem}>
            <a href="https://www.canva.com/design/DAEURCynL2w/7MzSvI2MK6ElONcCjpZs6g/view?utm_content=DAEURCynL2w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noopener noreferrer">
              Resume
          </a>
          </Menu.Item>
        </Menu>
      </>
    )
  }

  return (
    <div style={styles.menuBox}>
      <div style={{ display: 'inline-grid' }}>
        {menuOpen ? allMenuOptions() : <DownCircleOutlined style={{ fontSize: '25px', color: 'rgb(70,70,70)' }} onClick={toggleMenu} data-testid='open-menu' aria-label='open menu button' />}
      </div>
      <Divider style={{ marginTop: '1%' }} />
    </div>
  )
}

export default SiteMenu;