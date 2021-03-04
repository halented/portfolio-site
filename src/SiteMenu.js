import React, { useState } from 'react'
import { Menu, Divider } from 'antd';
import { CloseCircleOutlined, MenuOutlined, DownCircleOutlined } from '@ant-design/icons';
import { styles } from './styles'

const SiteMenu = () => {
  const [menuOpen, setmenuOpen] = useState(false)

  const menuSelect = (e) => {
    console.log(e)
  }

  const toggleMenu = () => {
    setmenuOpen(prev => !prev)
  }

  const openMenu = (ev) => {
    toggleMenu()

  }

  const allMenuOptions = () => {
    return (
      <>
        <CloseCircleOutlined style={{ fontSize: '25px' }} onClick={toggleMenu} />
        <Menu
          style={styles.dropdown}
          onClick={menuSelect}
        >
          {/* ::selection in css could change the color when clicked */}
          <Menu.Item key="1" style={styles.menuItem} className='menuItem'>Portfolio</Menu.Item>
          <Menu.Item key="2" style={styles.menuItem} className='menuItem'>Contact</Menu.Item>
          <Menu.Item key="3" style={styles.menuItem} className='menuItem'>Resume</Menu.Item>
          <Menu.Item key="4" style={styles.menuItem} className='menuItem'>Dog Pics</Menu.Item>
        </Menu>
      </>
    )
  }

  return (
    <div style={styles.menuBox}>
      <div style={{ display: 'inline-grid' }}>
        {menuOpen ? allMenuOptions() : <DownCircleOutlined style={{ fontSize: '25px' }} onClick={openMenu} />}
      </div>
      <Divider />
    </div>
  )
}

export default SiteMenu;

// <Menu
//         onClick={menuSelect}
        // style={{ display: 'flex', justifyContent: 'center' }}
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={['']}
//         mode="inline"
//         expandIcon={<div />}
//       >
//         <SubMenu
//           key="sub1"
//           icon={determineIcon()}
//           title=""
//           onTitleClick={() => setmenuOpen(prev => !prev)}
//           style={{ color: 'black' }}
//         >
          // <Menu.Item key="1">Portfolio</Menu.Item>
          // <Menu.Item key="2">Contact</Menu.Item>
          // <Menu.Item key="3">Resume</Menu.Item>
          // <Menu.Item key="4">Dog Pics</Menu.Item>
//         </SubMenu>
//       </Menu>
