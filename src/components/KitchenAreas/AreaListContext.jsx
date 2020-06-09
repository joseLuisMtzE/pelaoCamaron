import React, { createContext, useState, useEffect } from 'react';
import { makeRequest, getRol } from '../../shared/ApiWrapper';
import { alertError, alertSuccess } from '../../shared/Alert';
export const AreaListContext = createContext();

/*const api = axios.create({
    baseURL:url.apiEndPoint
})

const token=  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjBiZmU2ZTBmZDU0OWM0YWVlOTMzIiwibm9tYnJlIjoiSm9uYXRoYW4iLCJub21icmVVc3VhcmlvIjoiam9uYXRoYW5zYyIsInJvbCI6IkR1ZcOxbyJ9LCJpYXQiOjE1ODg0NzEwNTcsImV4cCI6MTU4ODQ5OTg1N30.TgKuInjR7dVehna-0xT7j_BqT8ojCmUCs75VxtHe6zI';
*/
const AreaListContextProvider = props => {
  //estado para mi arreglo de objetos de las areas de cocina
  const [areas, setAreas] = useState([]);

  //estado para saber que editar
  const [editItem, setEditItem] = useState(null);
  const retrieveAreas = async () => {
    try {
      let response = await makeRequest('GET', 'areas?isActive=true');
      let data = response.data.data;
      console.log(getRol());
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const addAreaRequest = async name => {
    try {
      let response = await makeRequest('POST', 'areas', {
        nombre: name
      });
      // console.log(response);

      if (response.status === 201) {
        alertSuccess(`Area de cocina: ${name} creada correctamente`);
      } else {
        alertError(`Hubo un error al añadir el área`);
      }
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const editAreaRequest = async (name, id) => {
    try {
      let response = await makeRequest('PATCH', `areas/${id}`, {
        nombre: name
      });

      if (response.status === 200) {
        alertSuccess(`Área de cocina: ${name} editada correctamente`);
      } else {
        alertError(`Hubo un error al editar el área`);
      }

      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAreaRequest = async id => {
    try {
      let response = await makeRequest('DELETE', `areas/${id}`);
      // console.log(response);
      if (response.status === 204) {
        alertSuccess(`Área de cocina borrada correctamente`);
      } else {
        alertError(`Hubo un error al borrar el área`);
      }

      let data = response.data.data;
      //console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const initializeState = async () => {
    const initialState = await retrieveAreas();
    setAreas(initialState);
    // const initialState = JSON.parse(localStorage.getItem("categories")) || [];
  };
  useEffect(() => {
    initializeState();
  }, []);

  const addArea = async name => {
    loader();
    let response = await addAreaRequest(name);
    response &&
      setAreas([...areas, { _id: response._id, nombre: response.nombre }]);
  };

  const removeArea = async id => {
    loader();
    await deleteAreaRequest(id);
    setAreas(areas.filter(area => area._id !== id));
  };

  const findItem = id => {
    const item = areas.find(area => area._id === id);
    setEditItem(item);
  };

  const editArea = async (name, id) => {
    loader();
    const newArea = areas.map(area =>
      area._id === id ? { _id: id, nombre: name } : area
    );

    await editAreaRequest(name, id);
    setAreas(newArea);
    setEditItem(null);
  };

  //spinner
  function loader() {
    props.setLoad(true);
    setTimeout(() => {
      props.setLoad(false);
    }, 1000);
  }

  return (
    <AreaListContext.Provider
      value={{
        areas,
        addArea,
        removeArea,
        findItem,
        editArea,
        editItem,
        setEditItem
      }}
    >
      {props.children}
    </AreaListContext.Provider>
  );
};

export default AreaListContextProvider;
