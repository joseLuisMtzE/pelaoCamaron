import React, {createContext, useState,useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
export const CategoryListContext = createContext();

const CategoryListContextProvider = props => {

    //obteniendo el LS
    const initialState = JSON.parse(localStorage.getItem("categories"))||[];
    
    //estado para mi arreglo de objetos de las categorias
    const [categories, setCategories]= useState(initialState);

    //estado para saber que editar
    const [editItem,setEditItem] = useState(null);

   // configuracion del LocalStorage
   useEffect(()=>{
       localStorage.setItem("categories",JSON.stringify(categories));
   },[categories]);

    //Funcion para añadir una categoria
    const addCategory = (name) => {
     loader();
     setCategories([...categories,{name,id:uuidv4()}])
    }

    //Funcion para borrar una categoria
    const removeCategory = id => {
        loader();
        setCategories(categories.filter(category =>category.id !== id));
    };

    const findItem = id => {
        const item = categories.find(category=>category.id===id);
        setEditItem(item);
    };

    const editCategory = (name,id)=>{
        loader();
        const newCategory = categories.map(category=>(category.id===id ?
             {name,id} : category));

        setCategories(newCategory);
        //reinicio de input
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