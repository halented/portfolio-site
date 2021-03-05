import React, { useState } from 'react'
import { Menu, Divider } from 'antd';
import { CloseCircleOutlined, DownCircleOutlined } from '@ant-design/icons';
import { styles } from './styles'

const SiteMenu = () => {
  const [menuOpen, setmenuOpen] = useState(false)

  const menuSelect = (e) => {
    console.log(e)
    setmenuOpen(prev => !prev)
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
        <CloseCircleOutlined style={{ fontSize: '25px', color: 'rgb(70,70,70)' }} onClick={toggleMenu} />
        <Menu
          style={styles.dropdown}
          onClick={menuSelect}
        >
          {/* ::selection in css could change the color when clicked */}
          {/* should also look into https://stackoverflow.com/questions/58041379/how-to-customize-and-change-color-of-a-menu-in-ant-design after you get the react router links in here */}
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
        {menuOpen ? allMenuOptions() : <DownCircleOutlined style={{ fontSize: '25px', color: 'rgb(70,70,70)' }} onClick={openMenu} />}
      </div>
      <Divider style={{ marginTop: '1%' }} />
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
