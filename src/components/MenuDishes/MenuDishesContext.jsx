import React, { createContext } from 'react';
import axios from 'axios';
import url from '../../constants/api';

export const DishesContext = createContext();

const MenuDishesContext = props => {
  const api = axios.create({
    baseURL: url.apiEndPoint
  });
  const token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjBiZmU2ZTBmZDU0OWM0YWVlOTMzIiwibm9tYnJlIjoiSm9uYXRoYW4iLCJub21icmVVc3VhcmlvIjoiam9uYXRoYW5zYyIsInJvbCI6IkR1ZcOxbyJ9LCJpYXQiOjE1ODg3Mzk3NjUsImV4cCI6MTU4ODc2ODU2NX0.QCGp77zS0p3WWlSPqaRmsoYu5ooETPO6MUSHA9KmWQ8';

  //------GET
  const retrieveFormMenuDishes = async () => {
    try {
      let response = await api.get('platillos', {
        headers: {
          Authorization: token
        }
      });
      let data = response.data.data;

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const retrieveAreas = async () => {
    try {
      let response = await api.get('areas', {
        headers: {
          Authorization: token
        }
      });
      let data = response.data.data;

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const retrieveCategories = async () => {
    try {
      let response = await api.get('categorias', {
        headers: {
          Authorization: token
        }
      });
      let data = response.data.data;

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  //------POST

  const addDishesRequest = async values => {
    /* console.log({
          "nombre":values.nombre,
          "area":values.area[0],
          "categoria": values.categoria[0],
          "precioConIva": parseInt(values.precioConIva),
          "precioSinIva": parseInt(values.precioSinIva),
          "peso": parseInt(values.peso),
          "descripcion": values.descripcion,
          "tiempoPreparación": parseInt(values.tiempoPreparación),
          "imagen": values.imagen

        })*/
    try {
      let response = await api.post(
        'platillos',
        {
          nombre: values.nombre,
          area: values.area[0],
          categoria: values.categoria[0],
          precioConIva: parseFloat(values.precioConIva),
          precioSinIva: parseFloat(values.precioSinIva),
          peso: parseFloat(values.peso),
          descripcion: values.descripcion,
          tiempoPreparación: parseInt(values.tiempoPreparación),
          imagen: values.imagen
        },
        {
          headers: {
            Authorization: token
          }
        }
      );

      if (response.status === 201) {
        console.log(`Platillo ${values.nombre} creado correctamente`);
      } else {
        console.log('Hubo un error al añadir el platillo');
      }
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  //-----toEdit
  const editDishes = async (id, nombre) => {
    console.log(id, nombre);
    /*try {
      let response = await api.patch(`platillos/${id}`, {
        "nombre": nombre,
      });

      if (response.status === 200) {
        console.log(`Platillo ${nombre} editada correctamente`);
      } else {
        alert(`Hubo un error al editar la categoria`);
      }

      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }*/
  };

  return (
    <div>
      <DishesContext.Provider
        value={{
          retrieveFormMenuDishes,
          addDishesRequest,
          retrieveCategories,
          retrieveAreas,
          editDishes
        }}
      >
        {props.children}
      </DishesContext.Provider>
    </div>
  );
};

export default MenuDishesContext;
