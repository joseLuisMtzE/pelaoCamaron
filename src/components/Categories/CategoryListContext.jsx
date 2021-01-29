import React, { createContext, useState, useEffect } from 'react';
import { alertError, alertSuccess } from '../../shared/Alert';
import { makeRequest } from '../../shared/ApiWrapper';
export const CategoryListContext = createContext();

const CategoryListContextProvider = props => {
  /* const prueba = async()=>{
        let response= await makeRequest('GET','categorias')
       console.log(response);
}*/

  const retrieveCategories = async () => {
    try {
      let response = await makeRequest('GET', 'categorias?isActive=true');
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const addCategoryRequest = async name => {
    try {
      let response = await makeRequest('POST', 'categorias', {
        nombre: name
      });
      // console.log(response);

      if (response.status === 201) {
        alertSuccess(`Categoria ${name} creada correctamente`);
      } else {
        alertError(`Hubo un error al añadir la categoria`);
      }
      let data = response.data.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const editCategoryRequest = async (name, id) => {
    try {
      let response = await makeRequest('PATCH', `categorias/${id}`, {
        nombre: name
      });
      // console.log(response);

      if (response.status === 200) {
        alertSuccess(`Categoria ${name} editada correctamente`);
      } else {
        alertError(`Hubo un error al editar la categoria`);
      }

      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCategoryRequest = async id => {
    try {
      let response = await makeRequest('DELETE', `categorias/${id}`);
      // console.log(response);

      if (response.status === 204) {
        alertSuccess(`Categoria borrada correctamente`);
      } else {
        alertError(`Hubo un error al borrar la categoria`);
      }

      let data = response.data.data;
      //console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const initializeState = async () => {
    const initialState = await retrieveCategories();
    setCategories(initialState);
    // const initialState = JSON.parse(localStorage.getItem("categories")) || [];
  };
  useEffect(() => {
    initializeState();
  }, []);

  //estado para mi arreglo de objetos de las categorias
  const [categories, setCategories] = useState([]);

  //estado para saber que editar
  const [editItem, setEditItem] = useState(null);

  const addCategory = async name => {
    loader();
    let response = await addCategoryRequest(name);
    response &&
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
        editItem,
        setEditItem
      }}
    >
      {props.children}
    </CategoryListContext.Provider>
  );
};

export default CategoryListContextProvider;