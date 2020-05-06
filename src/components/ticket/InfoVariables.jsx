import React from 'react';
import logo from '../../assets/logo.png';

const infoVariables = (props) => {
  const { info } = props;
  let fechaActual = new Date();

  var diasSemana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  var meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  //console.log('info', info.numPersonas);
  //console.log('props', props);

  return (
    <div className="Container-ticket">
      <img src={logo} alt="Logo Camaron Pelao" width={250}></img>
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
      <span className="Space-span">
        MESA: {info.mesa && info.mesa.noMesa} PERSONAS: {info.numPersonas}{' '}
        GENERAL
      </span>
      <span className="Space-span">FECHA VENTA: {info.fecha}</span>
      <span className="Space-span">
        FECHA REIMPRESIÓN:{' '}
        {`${diasSemana[fechaActual.getDay()]}, ${fechaActual.getDate()} de ${
          meses[fechaActual.getMonth()]
        } del ${fechaActual.getFullYear()} ${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`}
      </span>
      <br></br>
    </div>
  );
};
export default infoVariables;
