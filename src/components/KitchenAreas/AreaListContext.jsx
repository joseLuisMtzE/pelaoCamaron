import React, {createContext, useState,useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
export const AreaListContext = createContext();

const AreaListContextProvider = props => {

    //obteniendo el LS
    const initialState = JSON.parse(localStorage.getItem("areas"))||[];
    
    //estado para mi arreglo de objetos de las areas de cocina
    const [areas, setAreas]= useState(initialState);

    //estado para saber que editar
    const [editItem,setEditItem] = useState(null);

   // configuracion del LocalStorage
   useEffect(()=>{
       localStorage.setItem("areas",JSON.stringify(areas));
   },[areas]);

    //Funcion para añadir un area
    const addArea = (name) => {
     loader();
     setAreas([...areas,{name,id:uuidv4()}])
    }

    //Funcion para borrar un area
    const removeArea = id => {
        loader();
        setAreas(areas.filter(area =>area.id !== id));
    };

    const findItem = id => {
        const item = areas.find(area=>area.id===id);
        setEditItem(item);
    };

    const editArea = (name,id)=>{
        loader();
        const newArea = areas.map(area=>(area.id===id ?
             {name,id} : area));

        setAreas(newArea);
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
    <AreaListContext.Provider 
    value={{areas,addArea,removeArea,findItem,editArea,editItem}}>
     {props.children}
    </AreaListContext.Provider>  
    );
}
 
export default AreaListContextProvider;