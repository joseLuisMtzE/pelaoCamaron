import axios from 'axios';
import url from '../constants/api';
import jwt_decode from 'jwt-decode';
import { errorAlert } from './Alerts';

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjBiZmU2ZTBmZDU0OWM0YWVlOTMzIiwibm9tYnJlIjoiSm9uYXRoYW4iLCJub21icmVVc3VhcmlvIjoiam9uYXRoYW5zYyIsInJvbCI6IkR1ZcOxbyJ9LCJpYXQiOjE1ODg0NzEwNTcsImV4cCI6MTU4ODQ5OTg1N30.TgKuInjR7dVehna-0xT7j_BqT8ojCmUCs75VxtHe6zI';
// localStorage.setItem('token', token);

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
        () => (window.location.href = '/login')
      );
    }
    if (err && err.response && err.response.status === 400) {
      return err;
    }
    if (err && err.response && err.response.status === 500) {
      errorAlert('Oops...', 'Hubo un error');
      return err;
    }
    console.log('ERROR', err);
  }
};
