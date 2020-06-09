import axios from 'axios';
import url from '../constants/api';
import jwt_decode from 'jwt-decode';
import { errorAlert } from './Alerts';
function getToken() {
  if (localStorage.getItem('token')) {
    const tokenFinal = localStorage.getItem('token');
    return tokenFinal;
  }
}

export function getRol() {
  if (localStorage.getItem('token')) {
    var decoded = jwt_decode(getToken());
    return decoded.user.rol;
  }
}

export function isAuthenticated(){
  if (localStorage.getItem('token')) {
    return true
  }else{
    return false
  }
}


export const makeRequest = async (metodo, complement, payload) => {
  try {
    if (metodo === undefined) {
      return Error('Falta metodo de la petición');
    }

    if (complement === undefined) {
      return Error('Falta complento del url de la petición');
    }

    return await axios({
      method: metodo,
      url: url.apiEndPoint + complement,
      data: payload,
      headers: {
        Authorization: 'Bearer ' + getToken()
      }
    });
  } catch (err) {
    if (err && err.response && err.response.status === 401) {
      console.log('Unauthorized');
      errorAlert(
        'Autenticación fallida',
        'Redirigiendo...',
        () => (window.location.href = '/')
      );
    }
    if (
      (err && err.response && err.response.status === 400) ||
      (err && err.response && err.response.status === 404)
    ) {
      return err;
    }
    if (err && err.response && err.response.status === 500) {
      errorAlert('Oops...', 'Hubo un error');
      return err;
    }
    console.log('ERROR', err);
  }
};
