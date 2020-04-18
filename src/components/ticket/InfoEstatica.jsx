import React from 'react';
import logo from '../../assets/logo.png';

const InfoEstatica = props => {
  return (
    <div className="Container-ticket">
      <img src={logo} alt="Logo Camaron Pelao" width={250}></img>
      <div>
        <h4 className="Center">MARISCOS EL PELAO CAMARON</h4>
        <span className="Space-span">LUIS SALAS CHAVEZ</span>
        <span className="Space-span">RÉGIMEN: INCORPORACIÓN FISCAL</span>
        <span className="Space-span">MÁTRIZ:</span>
        <span className="Space-span">RFC: SATF871021H94</span>
        <span className="Space-span">AV. V CARRANZA 1649 NULL COLONIA</span>
        <span className="Space-span">RESIDENCIAL ESMERALDA CP 28017</span>
        <span className="Space-span">COLIMA COLIMA</span>
        <span className="Space-span">TELÉFONO:312 323 66 76</span>
        <span className="Space-span">SUCURSAL</span>
        <span className="Space-span">AV. V CARRANZA 1649 NULL COLONIA</span>
        <span className="Space-span">RESIDENCIAL ESMERALDA CP 28017</span>
        <span className="Space-span">COLIMA COLIMA</span>
        <span className="Space-span">TELÉFONO:312 323 66 76</span>
      </div>
    </div>
  );
};

export default InfoEstatica;
