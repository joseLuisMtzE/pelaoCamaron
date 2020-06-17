import React from 'react';
import { getRol } from '../../shared/ApiWrapper';

//! Imports
import { Link } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import {
  UserOutlined,
  MenuOutlined,
  BookOutlined,
  AppstoreOutlined,
  PoweroffOutlined,
  NotificationOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { isAuthenticated } from '../../shared/ApiWrapper';

//! Assets
import Logo from '../../assets/logo.png';
import { getRol } from '../../shared/ApiWrapper';

const { Content, Sider } = Layout;

function Sidernav(props) {
  const logOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div>
      <Layout>
        {isAuthenticated() && (
          <Sider
            breakpoint="xs"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
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
                  <Link to="/categorias-alimentos">
                    Categorías de platillos
                  </Link>
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
              {getRol() !== 'Mesero' ? (
                <div>
                  <Menu.Item key="7">
                    <ProfileOutlined />
                    <Link to="/ordenes-vista-general" className="nav-text">
                      Órdenes
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="8">
                    <NotificationOutlined />
                    <Link to="/comandas" className="nav-text">
                      Comandas
                    </Link>
                  </Menu.Item>
                </div>
              ) : null}
              {getRol() === 'Dueño' && (
                <Menu.Item key="6">
                  <UserOutlined />
                  <Link className="nav-text" to="/vista-usuarios">
                    Usuarios
                  </Link>
                </Menu.Item>
              )}
              <Menu.Item key="7">
                <ProfileOutlined />
                <Link to="/ordenes-vista-general" className="nav-text">
                  Órdenes
                </Link>
              </Menu.Item>
              <Menu.Item key="8">
                <NotificationOutlined />
                <Link to="/comandas" className="nav-text">
                  Comandas
                </Link>
              </Menu.Item>
            </Menu>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <Button type="primary" danger onClick={logOut}>
                <PoweroffOutlined /> Cerrar Sesión
              </Button>
            </div>
          </Sider>
        )}
        <Layout>
          <Content style={{ minHeight: '100vh' }}>{props.children}</Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Sidernav;
