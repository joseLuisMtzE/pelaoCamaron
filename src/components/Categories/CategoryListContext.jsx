import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import url from '../../constants/api';
import { alertError, alertSuccess } from '../../shared/Alert';
export const CategoryListContext = createContext();

const api = axios.create({
  baseURL: url.apiEndPoint
});

const CategoryListContextProvider = props => {
  //estado para mi arreglo de objetos de las categorias
  const [categories, setCategories] = useState([]);
  //estado para saber que editar
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    //Saber si el componente está montado o no
    let isMounted = true;
    async function fetchData() {
      const initialState = await retrieveCategories();
      if (isMounted) setCategories(initialState);
    }
    fetchData();

    //This cleanup funtion will be called whenever the component unmounts, this will be similar to componentWillUnmount() in class components
    return function cleanup() {
      isMounted = false;
    };
  }, []);

  const retrieveCategories = async () => {
    try {
      let response = await api.get('categorias');
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const addCategoryRequest = async name => {
    try {
      let response = await api.post('categorias', {
        nombre: name
      });
      // console.log(response);

      if (response.status === 201) {
        alertSuccess(`Categoria ${name} creada correctamente`);
      } else {
        alertError('Hubo un error al añadir la categoria');
      }
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const editCategoryRequest = async (name, id) => {
    try {
      let response = await api.patch(`categorias/${id}`, {
        nombre: name
      });
      // console.log(response);

      if (response.status === 200) {
        alertSuccess(`Categoria ${name} editada correctamente`);
      } else {
        alertError('Hubo un error al editar la categoria');
      }

      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCategoryRequest = async id => {
    try {
      let response = await api.delete(`categorias/${id}`);
      // console.log(response);

      if (response.status === 200) {
        alertSuccess('Categoria borrada correctamente');
      } else {
        alertError('Hubo un error al borrar la categoria');
      }

      let data = response.data.data;
      //console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const addCategory = async name => {
    loader();
    let response = await addCategoryRequest(name);
    setCategories([
      ...categories,
      { _id: response._id, nombre: response.nombre }
    ]);
  };

  const removeCategory = async id => {
    loader();
    await deleteCategoryRequest(id);
    setCategories(categories.filter(category => category._id !== id));
  };

  const findItem = id => {
    const item = categories.find(category => category._id === id);
    setEditItem(item);
  };

  const editCategory = async (name, id) => {
    loader();
    const newCategory = categories.map(category =>
      category._id === id ? { _id: id, nombre: name } : category
    );
    await editCategoryRequest(name, id);
    setCategories(newCategory);
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
    <CategoryListContext.Provider
      value={{
        categories,
        addCategory,
        removeCategory,
        findItem,
        editCategory,
        editItem
      }}
    >
      {props.children}
    </CategoryListContext.Provider>
  );
};

export default CategoryListContextProvider;
