import React, {useContext, useState,useEffect} from 'react'
import {AreaListContext} from './AreaListContext';
import { Input } from 'antd';

const AreaForm = () => {

    const {addArea, editItem, editArea} = useContext(AreaListContext);

    const [name, setName] = useState('');

    //se va guardando el estado con el cambio en el input
    const handleChange= e => {
        setName(e.target.value);
    };

    //cuando se ingresa el area 
    const handleSubmit = e => {
        e.preventDefault();
        if(editItem===null){
            addArea(name);
            setName("");
        }else{
            editArea(name,editItem.id);
        }
    };

    useEffect(()=>{
        if(editItem !== null){
            setName(editItem.name);
        } else { setName("");}
    },[editItem]);

    return (
        <form onSubmit={handleSubmit} className="formKitchen">
            <Input
              type="text"
              onChange={handleChange}
              value={name}
              maxLength="20"
              id="input-KitchenArea"
              className="area-input"
              placeholder="Añadir áreas de cocina..."
              required/>
              <div className="buttonsKitchen">
                  <button  className="add-area-btn" >
                  {editItem !==null ? 'Editar' : 'Añadir'}
                  </button>
              </div>
        </form>
    )
}

export default AreaForm