import React, { useState } from 'react'
import { Menu, Divider } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const SiteMenu = () => {
  const [showOptions, setShowOptions] = useState(false)

  const menuSelect = (e) => {
    console.log(e)
  }

  const determineIcon = () => {
    return showOptions ? <CloseOutlined style={{ fontSize: '30px' }} /> : <MenuOutlined style={{ fontSize: '30px' }} />
  }

  return (
    <div style={{ padding: '5%' }}>
      <Menu
        onClick={menuSelect}
        // style={{ paddingLeft: '46.5%' }}
        style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['']}
        mode="inline"
        expandIcon={<div />}
      >
        <SubMenu
          key="sub1"
          icon={determineIcon()}
          title=""
          onTitleClick={() => setShowOptions(prev => !prev)}
          style={{ width: '100px' }}
        >
          <Menu.Item key="1">Portfolio</Menu.Item>
          <Menu.Item key="2">Contact</Menu.Item>
          <Menu.Item key="3">Resume</Menu.Item>
          <Menu.Item key="4">Dog Pics</Menu.Item>
        </SubMenu>
      </Menu>
      <Divider style={{ marginTop: '0%' }}></Divider>
    </div>
  )
}

export default SiteMenu;
