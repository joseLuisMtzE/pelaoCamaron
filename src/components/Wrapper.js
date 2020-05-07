import axios from 'axios';
import url from '../constants/api';
import jwt_decode from 'jwt-decode';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhZTRjYjZiMTNhYzMwMDA0YzI2MDJhIiwibm9tYnJlIjoiS2FyZW4iLCJub21icmVVc3VhcmlvIjoia3FhcmVuIiwicm9sIjoiTWVzZXJvIn0sImlhdCI6MTU4ODcwMDk0NiwiZXhwIjoxNTg4NzI5NzQ2fQ.clNvvzbwJF9dOGAS16-CSHdinx5feEUOP3dYPj-SXdU';
localStorage.setItem('token',token);


function getToken(){

    if(!localStorage.getItem('token')){
        throw Error('Esta mal el token');
    }

   const tokenFinal= localStorage.getItem('token');
   return tokenFinal;
} 


export const makeRequest = async (metodo,complement,payload) =>{

    if(metodo===undefined){
        return Error('Falta metodo de la petición');    
    }

    if(complement===undefined){
        return Error('Falta complento del url de la petición');       
    }

    return axios({
        method:metodo,
        url:url.apiEndPoint+complement,
        data:payload,
        headers:{
          'Authorization': 'Bearer '+ getToken()
        }
    })
}

export function getRol(){

    var decoded = jwt_decode(getToken());
    return decoded.user.rol;
}