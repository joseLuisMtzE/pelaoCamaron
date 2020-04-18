import React from 'react';



const Pago=(props)=>{
    const pago=props.Pago;
        
    return(
        <div  className="Container-ticket">
        <hr></hr>            
        <table>
            <thead>
                <tr>
                    <th >SUB-TOTAL</th>
                    <th >IMPUESTOS</th>
                    <th >DESCUENTO</th>
                    <th >EFECTIVO</th>                    
                </tr>
            </thead>  
                     
          
            
            <tbody>
            
                <tr>
                    <td >SUB-TOTAL: </td>
                    <td ></td>
                    <td ></td>
                    <td >${pago.subtotal}</td>
                </tr>
                <tr>
                    <td >IMPUESTOS: </td>
                    <td ></td>
                    <td ></td>
                    <td >${pago.impuestos}</td>
                </tr>
                <tr>
                    <td >DESCUENTO: </td>
                    <td ></td>
                    <td ></td>
                    <td >-${pago.descuento}</td>
                </tr>
                <tr>
                    <td >EFECTIVO</td>
                    <td ></td>
                    <td ></td>
                    <td >${pago.efectivo}</td>
                </tr> 
                <tr>
                    <td >CAMBIO</td>
                    <td ></td>
                    <td ></td>
                    <td >${pago.cambio}</td>
                </tr> 
                <tr>
                    <td ><h3>TOTAL: </h3></td>
                    <td ></td>
                    <td ></td>
                    <td ><h3>${pago.total}</h3></td>
                </tr>               
            </tbody>            
        </table>
        </div>
    );
}
export default Pago;