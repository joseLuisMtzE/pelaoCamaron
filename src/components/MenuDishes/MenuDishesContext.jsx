import React, { createContext } from 'react';
import { makeRequest } from '../../shared/ApiWrapper';
import { alertError, alertSuccess } from '../../shared/Alert';

export const DishesContext = createContext();

const MenuDishesContext = props => {
  
  //------GET
  const retrieveFormMenuDishes = async () => {
    try {
      let response = await makeRequest('GET', 'platillos?isActive=true');
      let data = response.data.data;
      console.log(data)
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const retrieveAreas = async () => {
    try {
      let response = await makeRequest('GET', 'areas?isActive=true');
      let data = response.data.data;

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const retrieveCategories = async () => {
    try {
      let response = await makeRequest('GET', 'categorias?isActive=true');
      let data = response.data.data;

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  //------POST

  const addDishesRequest = async values => {
      try {
      let response = await makeRequest('POST', 'platillos',{
        nombre: values.nombre,
        area: values.area[0],
        categoria: values.categoria[0],
        precioConIva: parseFloat(values.precioConIva),
        precioSinIva: parseFloat(values.precioSinIva),
        peso: parseFloat(values.peso),
        descripcion: values.descripcion,
        tiempoPreparación: parseInt(values.tiempoPreparación),
        imagen: values.imagen
      });
       
      if (response.status === 201) {
        alertSuccess(`Platillo ${values.nombre} creado correctamente`);
      } else {
        alertError('Hubo un error al añadir el platillo');
      }
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  //-----toEdit  PUT
  const editDishes = async (id,values) => {
    console.log("EDIT DISHES",{nombre: values.nombre,
      area: values.area,
      categoria: values.categoria,
      precioConIva: parseFloat(values.precioConIva),
      precioSinIva: parseFloat(values.precioSinIva),
      peso: parseFloat(values.peso),
      descripcion: values.descripcion,
      tiempoPreparación: parseInt(values.tiempoPreparación),
      imagen: values.imagen})
    try {
      let response = await makeRequest('PUT', `platillos/${id}`,{
        nombre: values.nombre,
        area: values.area,
        categoria: values.categoria,
        precioConIva: parseFloat(values.precioConIva),
        precioSinIva: parseFloat(values.precioSinIva),
        peso: parseFloat(values.peso),
        descripcion: values.descripcion,
        tiempoPreparación: parseInt(values.tiempoPreparación),
        imagen: values.imagen
      });

      console.log(response)
      if (response.status === 200) {
        alertSuccess(`Platillo ${values.nombre} editada correctamente`);
      } else {
        alertError(`Hubo un error al editar la categoria`);
      }


      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteDishes = async (id) => {
    try {
      let response = await makeRequest('DELETE', `platillos/${id}`);
      // console.log(response);

      if (response.status === 204) {
        alertSuccess(`Platillo borrado correctamente`);
      } else {
        alertError(`Hubo un error al borrar el platillo`);
      }

      let data = response.data.data;
      //console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div>
      <DishesContext.Provider
        value={{
          retrieveFormMenuDishes,
          addDishesRequest,
          retrieveCategories,
          retrieveAreas,
          editDishes,
          deleteDishes
        }}
      >
        {props.children}
      </DishesContext.Provider>
    </div>
  );
};

export default MenuDishesContext;
