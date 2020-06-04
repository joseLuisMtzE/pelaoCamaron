import React from 'react';

//! Imports
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  MenuOutlined,
  BookOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';

//! Assets
import Logo from '../../assets/logo.png';

const { Content, Sider } = Layout;

function Sidernav(props) {
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
              <Link to="/mesas" className="nav-text">
                Mesas
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <BookOutlined />
              <Link to="/home-delivery" className="nav-text">
                Orden a domicilio
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <MenuOutlined />
                  <span className="nav-text">Menú</span>
                </span>
              }
            >
              <Menu.Item key="3">
                <Link to="/menu-dishes">Platillos</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/categorias-alimentos">Categorías de platillos</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/areas-cocina">Áreas de cocina</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="6">
              <UserOutlined />
              <Link className="nav-text" to="/vista-usuarios">
                Usuarios
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ minHeight: '100vh' }}>{props.children}</Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Sidernav;
