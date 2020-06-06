import React from 'react';
import { Button } from 'antd';
import { PrinterFilled } from '@ant-design/icons';
import { getRol } from '../../shared/ApiWrapper';
const PrintTicket = () => {
  return (
    <div className="Container-ticket">
      <hr></hr>
      <span className="Space-span">¡GRACIAS POR SU VISITA!</span>
      <span className="Space-span">ESTE DOCUMENTO NO TIENE VALOR FISCAL</span>
      {getRol() === 'Cocina' ? null : (
        <Button
          style={{
            display: 'flex',
            width: 120,
            height: 50,
            boxShadow: '0px 3px 5px 0px grey',
          }}
          id="Button-print"
          type="primary"
          htmlType="button"
          onClick={window.print}
          icon={<PrinterFilled />}
        >
          Imprimir
        </Button>
      )}
      <br></br>
      <br></br>
    </div>
  );
};
export default PrintTicket;
