import React from 'react';

const TablaProductos=(props)=>{

    const producto=props.TablaProductos;
    var tableProductos=document.getElementById("tableProductos");
    
    function productosTabla(){
        //rows
        for( var i=1; i<tableProductos.rows.length;i++){
        //cells
            for( var j=0; j<tableProductos[i].cells.length;j++){
                tableProductos.rows[i].cells[j]=producto[i-0][j];
                return tableProductos;
        }
    } 
    }   
    return(
        <div  className="Container-ticket">
        <hr></hr>            
        <table id="tableProductos">
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
                    <td >{productosTabla()}</td>
                    <td >{}</td>
                    <td >${}</td>
                    <td >${}</td>
                </tr>
                <tr>
                    <td >{}</td>
                    <td >{}</td>
                    <td >${}</td>
                    <td >${}</td>
                </tr>
                <tr>
                    <td >{}</td>
                    <td >{}</td>
                    <td >${}</td>
                    <td >${}</td>
                </tr>               
            </tbody>            
        </table>
         
        </div>
    );
}
export default TablaProductos;