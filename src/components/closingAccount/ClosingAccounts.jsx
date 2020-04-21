import React,{Fragment} from 'react';
/* import url from '../../constants/apinp';
import axios from 'axios';
 */
/*const api = axios.create({
  baseURL:url.apiEndPoint
})*/


const ClosingAccounts = () => {
 /* const reciveOrder = async () =>{
    try{
        let response = await api.get('ordenes');
        let data = response.data.data;
        return data;
    }catch(err){
        console.log(err);
    }
  }*/
    return ( 
      <Fragment>
    <div>
    <div className="">
    <div className="App box is-three-quarter column">
     <div className="outer-box">
     <h3 className="title is-1"> Cierre de cuenta </h3>
<table className="table">
  <tr>
    <td>
    <div className="mitad">
     <h5 className="title is-1"> Tipo de pago </h5>
     <select class="form-control ">
      <option>Efectivo</option>
      <option>Tarjeta de crédito</option>
     </select> 
     </div>
    </td>
    <td>
    <div className="pago">
     <strong> <h4 className="">Total: $</h4> </strong>
     </div>
    </td>
  </tr>
  <tr>
    <td>
     <h6 className="bold"> Pago en efectivo</h6>
     <p>Efectivo: $</p>
     <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="0.00"></input>
      
    </td>
    <td>
    <h6 className="bold"> Pago con Tarjeta: $</h6>
     <p>Tipo de Tarjeta: </p>
     <select class="form-control">
      <option>Visa</option>
      <option>Mastercard</option>
      <option>American Express</option>
      <option>Mastercard</option>
      <option>Samsung Pay</option>
     </select> 
     <tr>
       <td>
         <p> Cantidad: $</p>
         <input type="number" className="form-control mitad" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="0.00"></input>
       </td>
       <td>
         <p>Referencia:</p>
         <input type="" className="form-control mitad" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder=""></input>
       </td>
     </tr>
    </td>
  </tr>

  <tr>
      <td>
      <p>Pago con Cupón: </p> 
      <h6 className="">Valor del cupón:</h6>
      <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="0.00"></input>
      </td>

      <td>Totales:<br></br>
      
      <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-sm">Cambio:</span>
      
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" disabled placeholder="0.00"></input>
      </div>
      </td>
  </tr>
</table>

     </div>
    </div>     
    </div>
      </div>
           </Fragment>
     ); 
}
 
export default ClosingAccounts;
