import React, { createContext, useState, useEffect } from 'react';
//import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import url from '../../constants/api';
import { alertError, alertSuccess } from '../../shared/Alert';
export const AreaListContext = createContext();

const api = axios.create({
  baseURL: url.apiEndPoint
});

const AreaListContextProvider = props => {
  //estado para mi arreglo de objetos de las areas de cocina
  const [areas, setAreas] = useState([]);

  //estado para saber que editar
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    //Saber si el componente está montado o no
    let isMounted = true;
    async function fetchData() {
      const initialState = await retrieveAreas();
      if (isMounted) setAreas(initialState);
    }
    fetchData();

    //This cleanup funtion will be called whenever the component unmounts, this will be similar to componentWillUnmount() in class components
    return function cleanup() {
      isMounted = false;
    };
  }, []);

  const retrieveAreas = async () => {
    try {
      let response = await api.get('areas');
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const addAreaRequest = async name => {
    try {
      let response = await api.post('areas', {
        nombre: name
      });
      // console.log(response);

      if (response.status === 201) {
        alertSuccess(`Area de cocina: ${name} creada correctamente`);
      } else {
        alertError('Hubo un error al añadir el área');
      }
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const editAreaRequest = async (name, id) => {
    try {
      let response = await api.patch(`areas/${id}`, {
        nombre: name
      });

      if (response.status === 200) {
        alertSuccess(`Área de cocina: ${name} editada correctamente`);
      } else {
        alertError('Hubo un error al editar el área');
      }

      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAreaRequest = async id => {
    try {
      let response = await api.delete(`areas/${id}`);
      // console.log(response);
      if (response.status === 200) {
        alertSuccess('Área de cocina borrada correctamente');
      } else {
        alertError('Hubo un error al borrar el área');
      }

      let data = response.data.data;
      //console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const addArea = async name => {
    loader();
    let response = await addAreaRequest(name);
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
      value={{ areas, addArea, removeArea, findItem, editArea, editItem }}
    >
      {props.children}
    </AreaListContext.Provider>
  );
};

export default AreaListContextProvider;
