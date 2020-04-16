import React from 'react';

const TablaProductos=(props)=>{

    const producto=props.TablaProductos;
    
    return(
        <div  className="Container-ticket">
        <hr></hr>            
        <table>
            <thead>
                <tr>
                    <th >CANTIDAD</th>
                    <th >PLATILLO</th>
                    <th >PRECIO</th>
                    <th >IMPORTE</th>                    
                </tr>
            </thead>  
                     
          
            
            <tbody>
            
                <tr>
                    <td >{producto.cantidad}</td>
                    <td >{producto.platillo}</td>
                    <td >${producto.precio}</td>
                    <td >${producto.importe}</td>
                </tr>
                <tr>
                    <td >{producto.cantidad}</td>
                    <td >{producto.platillo}</td>
                    <td >${producto.precio}</td>
                    <td >${producto.importe}</td>
                </tr>
                <tr>
                    <td >{producto.cantidad}</td>
                    <td >{producto.platillo}</td>
                    <td >${producto.precio}</td>
                    <td >${producto.importe}</td>
                </tr>               
            </tbody>            
        </table>
         
        </div>
    );
}
export default TablaProductos;