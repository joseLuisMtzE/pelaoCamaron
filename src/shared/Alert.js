import Swal from 'sweetalert2';

    export function alertError(message){
        Swal.fire({
            icon: 'error',
            title:'Error' ,
            text: message
           // footer: '<a href>Why do I have this issue?</a>'
        })
    }

    export function alertSuccess(message){
        Swal.fire({
            icon: 'success',
            title: 'Proceso exitoso!',
            text: message
           // footer: '<a href>Why do I have this issue?</a>'
        })
    }

 
