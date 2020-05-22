import axios from 'axios';
import url from '../constants/api';
import jwt_decode from 'jwt-decode';

function getToken() {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjBiZmU2ZTBmZDU0OWM0YWVlOTMzIiwibm9tYnJlIjoiSm9uYXRoYW4iLCJub21icmVVc3VhcmlvIjoiam9uYXRoYW5zYyIsInJvbCI6IkR1ZcOxbyJ9LCJpYXQiOjE1ODg4ODkzMjksImV4cCI6MTU4ODkxODEyOX0.DunPqqwNInRE03f35lD3TcGPOooMuBMvZomaZbZwQNw';
  // if (!localStorage.getItem('token')) {
  //   throw Error('Esta mal el token');
  // }
  localStorage.setItem('token', token);
  const tokenFinal = localStorage.getItem('token');
  return tokenFinal;
}

export const makeRequest = async (metodo, complement, payload) => {
  if (metodo === undefined) {
    return Error('Falta metodo de la petición');
  }

  if (complement === undefined) {
    return Error('Falta complento del url de la petición');
  }

  return axios({
    method: metodo,
    url: url.apiEndPoint + complement,
    data: payload,
    headers: {
      Authorization: 'Bearer ' + getToken(),
    },
  });
};

export function getRol() {
  var decoded = jwt_decode(getToken());
  return decoded.user.rol;
}
