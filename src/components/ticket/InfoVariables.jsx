import React from 'react';
import logo from '../../assets/logo.png';

const infoVariables = (props) => {
  const { info } = props;
  let fechaActual = new Date();
  /*console.log(
    `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} ${fecha.toLocaleString(
      'en-US',
      { hour: 'numeric', minute: 'numeric', hour12: true }
    )}`
  );*/

  return (
    <div className="Container-ticket">
      <div className="LogoCamaron-posicion">
        <img src={logo} alt="Logo Camaron Pelao" width={250}></img>
      </div>
      <h4>MARISCOS EL PELAO CAMARON</h4>
      <span className="Space-span">MARIELA SALAS TORRES</span>
      <br></br>
      <span className="Space-span">RÉGIMEN: INCORPORACIÓN FISCAL</span>
      <span className="Space-span">MÁTRIZ:</span>
      <span className="Space-span">RFC: SATF871021H94</span>
      <span className="Space-span">AV. V CARRANZA 1649 NULL COLONIA</span>
      <span className="Space-span">RESIDENCIAL ESMERALDA CP 28017</span>
      <span className="Space-span">COLIMA COLIMA</span>
      <span className="Space-span">TELÉFONO:312 323 66 76</span>
      <br></br>
      <span className="Space-span">SUCURSAL:</span>
      <span className="Space-span">AV. V CARRANZA 1649 NULL COLONIA</span>
      <span className="Space-span">RESIDENCIAL ESMERALDA CP 28017</span>
      <span className="Space-span">COLIMA COLIMA</span>
      <span className="Space-span">TELÉFONO:312 323 66 76</span>
      <br></br>
      <strong className="Space-span">FOLIO TICKET #{info.folio}</strong>
      <span className="Space-span">MESA: {info.mesa && info.mesa.noMesa}</span>
      <span className="Space-span">PERSONAS: {info.numPersonas} </span>
      <span className="Space-span">FECHA VENTA: {info.fecha}</span>
      <span className="Space-span">
        FECHA REIMPRESIÓN:{' '}
        {`${fechaActual.getDate()}/${
          fechaActual.getMonth() + 1
        }/${fechaActual.getFullYear()} ${fechaActual.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}`}
      </span>
      <br></br>
    </div>
  );
};
export default infoVariables;
