import React from 'react';
import { Input, Button } from 'antd';
import ModalForm from '../MenuDishes/ModalMenuDishes';
import Background from '../../assets/background.png';
import { DownloadOutlined } from '@ant-design/icons';
import MenuGallery from './MenuGallery';
const { Search } = Input;

/*
<div>
                <h1>Menu de Platillos</h1>
            </div>
            <div className="margin-10">
            <ModalForm/>
            </div>
            <hr/>
            
               <div style={{overflowX:"auto"}}>
                <table  >
                    <tbody >
                        <tr>
                            <td>Nombre</td>
                            <td>Categoria</td>
                            <td>Area</td>
                            <td>Precio con IVA</td>
                            <td>Precio sin IVA</td>
                            <td>Descripcion</td>
                            <td>Tiempo de preparación</td>
                            <td>Imagen</td>
                            <td>Impuesto</td>
                            
                        </tr>
                    </tbody>
                </table>
                </div>  
*/

function MenuDishes() {
  return (
    <div>
      <img src={Background} alt="bg" style={{ width: '100%', height: 180 }} />
      <header style={{ top: 0, position: 'absolute' }}>
        <h1
          style={{
            color: '#545454',
            position: 'absolute',
            left: 20,
            top: 30,
            fontWeight: 'bold',
          }}
        >
          Menú
        </h1>

        <div
          style={{ position: 'absolute', left: 200, top: 35, display: 'block' }}
        >
          <Search
            placeholder="Buscar"
            onSearch={(value) => console.log(value)}
            style={{ width: 100, border: 'none' }}
            size="large"
          />
        </div>
      </header>
      <div className="scrollmenu" style={{ position: 'relative', top: -90 }}>
        <Button
          shape="circle"
          icon={<DownloadOutlined />}
          style={{
            margin: 12,
            width: 60,
            height: 60,
            border: 'none',
            boxShadow: '0px 3px 5px 0px grey',
          }}
        />
        <Button
          shape="circle"
          icon={<DownloadOutlined />}
          style={{
            margin: 12,
            width: 60,
            height: 60,
            border: 'none',
            boxShadow: '0px 3px 5px 0px grey',
          }}
        />
        <Button
          shape="circle"
          icon={<DownloadOutlined />}
          style={{
            margin: 12,
            width: 60,
            height: 60,
            border: 'none',
            boxShadow: '0px 3px 5px 0px grey',
          }}
        />
        <Button
          shape="circle"
          icon={<DownloadOutlined />}
          style={{
            margin: 12,
            width: 60,
            height: 60,
            border: 'none',
            boxShadow: '0px 3px 5px 0px grey',
          }}
        />
        <Button
          shape="circle"
          icon={<DownloadOutlined />}
          style={{
            margin: 12,
            width: 60,
            height: 60,
            border: 'none',
            boxShadow: '0px 3px 5px 0px grey',
          }}
        />
        <Button
          shape="circle"
          icon={<DownloadOutlined />}
          style={{
            margin: 12,
            width: 60,
            height: 60,
            border: 'none',
            boxShadow: '0px 3px 5px 0px grey',
          }}
        />
      </div>
      <ModalForm/>
      <MenuGallery/>
    </div>
  );
}

export default MenuDishes;
