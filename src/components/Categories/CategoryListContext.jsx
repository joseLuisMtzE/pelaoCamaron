import React, {createContext, useState,useEffect} from 'react';
//import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import url from '../../constants/api';
export const CategoryListContext = createContext();

const api = axios.create({
    baseURL:url.apiEndPoint
})

const CategoryListContextProvider = props => {

    const retrieveCategories = async () =>{
        try{
            let response = await api.get('categorias');
            let data = response.data.data;
            return data;
        }catch(err){
            console.log(err);
        }
    }

    const addCategoryRequest = async (name) =>{
        try{
            let response = await api.post('categorias',{
                "nombre": name
            });
            console.log(response);

            if(response.status === 201){
                alert(`Categoria ${name} creada correctamente`)
            }
            else{
                alert(`Hubo un error`)
            }
            let data = response.data.data;
            return data;
        }catch(err){
            console.log(err);
        }
    }

    const editCategoryRequest = async (name,id) =>{
        try{
            let response = await api.patch(`categorias/${id}`,{
                "nombre": name
            });
            console.log(response);

            if(response.status === 200){
                alert(`Categoria ${name} editada correctamente`)
            }
            else{
                alert(`Hubo un error`)
            }
            
            let data = response.data.data;
            return data;
        }catch(err){
            console.log(err);
        }
    }

    const deleteCategoryRequest = async (id) =>{
        try{
            let response = await api.delete(`categorias/${id}`);
            console.log(response);

            if(response.status === 204){
                alert(`Categoria borrada correctamente`)
            }
            else{
                alert(`Hubo un error`)
            }
            
            let data = response.data.data;
            console.log(data);
            return data;
        }catch(err){
            console.log(err);
        }
    }
    
    //obteniendo el LS
    const initializeState = async () => {
        const initialState = await retrieveCategories();
        setCategories(initialState);
        //console.log(initialState);
        // const initialState = JSON.parse(localStorage.getItem("categories")) || [];
    }
    useEffect(()=>{initializeState()},[])
    
    //estado para mi arreglo de objetos de las categorias
    const [categories, setCategories]= useState([]);

    //estado para saber que editar
    const [editItem,setEditItem] = useState(null);

    //Funcion para añadir una categoria
    const addCategory = async (name) => {
      loader();
      let response = await addCategoryRequest(name);

      console.log(response)
      setCategories([...categories,{_id:response._id,nombre:response.nombre}])
    }

    //Funcion para borrar una categoria
    const removeCategory = async (id) => {
        loader();
        await deleteCategoryRequest(id);
        setCategories(categories.filter(category =>category._id !== id));
    };

    const findItem = id => {
        console.log(categories,id)
        const item = categories.find(category=>category._id===id);
        setEditItem(item);
    };

    const editCategory = async (name,id)=>{
        loader();
        const newCategory = categories.map(category=>(category._id===id ?
             {_id:id,nombre:name} : category));
        await editCategoryRequest(name,id);
        setCategories(newCategory);
        setEditItem(null);
    };

    //spinner
    function loader(){
        props.setLoad(true);
        setTimeout(()=>{
            props.setLoad(false);
        },1000);        
    }

    return (
    <CategoryListContext.Provider 
    value={{categories,addCategory,removeCategory,findItem,editCategory,editItem}}>
     {props.children}
    </CategoryListContext.Provider>  
    );
}
 
export default CategoryListContextProvider;