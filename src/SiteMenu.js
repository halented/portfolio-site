import React, { useState } from 'react'
import { Menu, Divider } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { styles } from './styles'

const { SubMenu } = Menu;

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
        <CloseOutlined style={{ fontSize: '25px' }} onClick={toggleMenu} />
        <Menu style={styles.dropdown}>
          <Menu.Item key="1" style={styles.menuItem}>Portfolio</Menu.Item>
          <Menu.Item key="2" style={styles.menuItem}>Contact</Menu.Item>
          <Menu.Item key="3" style={styles.menuItem}>Resume</Menu.Item>
          <Menu.Item key="4" style={styles.menuItem}>Dog Pics</Menu.Item>
        </Menu>
      </>
    )
  }

  return (
    <div style={styles.menuBox}>
      <div style={{ display: 'inline-grid' }}>
        {menuOpen ? allMenuOptions() : <MenuOutlined style={{ fontSize: '25px' }} onClick={openMenu} />}
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
