import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, MenuOutlined, BookOutlined, AppstoreOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import Logo from '../assets/logo.png'
import {Link} from "react-router-dom";
import HomeDelivery from '../components/HomeDelivery/HomeDelivery'

const { Header, Content, Footer, Sider } = Layout;

function Sidernav() {
    return (
        <div>
            <Layout>
    <Sider
      breakpoint="xs"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >

      <div className="logo" />
      <div className="centerContent">
      <img className="imgLogo" src={Logo} alt="logo" width="150px" />

      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item key="1">
        <AppstoreOutlined />
          <Link to="" className="nav-text">Mesas</Link>
        </Menu.Item>
        <Menu.Item key="2">
        <BookOutlined />
          <Link to="/home-delivery" className="nav-text">Orden a domicilio</Link>
        </Menu.Item>
        <SubMenu key="sub1"
        title={
            <span>
            <MenuOutlined />
            <Link to="" className="nav-text">Menú</Link>
            </span>
        }
        >
        
        <Menu.Item key="3"> <Link to="">Platillos</Link> </Menu.Item>
        <Menu.Item key="4"> <Link to="">Categorías de platillos</Link> </Menu.Item>
        <Menu.Item key="5"><Link to="">Áreas de cocina</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="6">
        <UserOutlined />
        <   Link className="nav-text" to="">Usuarios</Link>
        </Menu.Item>
        
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        
<HomeDelivery/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
        </div>
    )
}

export default Sidernav


