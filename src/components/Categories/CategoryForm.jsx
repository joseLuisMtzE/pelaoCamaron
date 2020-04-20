import React, {useContext, useState,useEffect} from 'react';
import {CategoryListContext} from './CategoryListContext';

const CategoryForm = () => {
    const {addCategory, editItem, editCategory} = useContext(CategoryListContext);

    const [name, setName] = useState('');

    //se va guardando el estado con el cambio en el input
    const handleChange= e => {
        setName(e.target.value);
    };

    //cuando se ingresa la categoria
    const handleSubmit = e => {
        e.preventDefault();
        if(editItem===null){
            addCategory(name);
            setName("");
        }else{
            editCategory(name,editItem._id);
        }
    };

    useEffect(()=>{
        if(editItem !== null){
            setName(editItem.nombre);
        } else { setName("");}
    },[editItem]);

    return (
        <form onSubmit={handleSubmit} className="formKitchen">
            <input
              type="text"
              onChange={handleChange}
              value={name}
              maxLength="20"
              id="input-categories"
              className="area-input"
              placeholder="Añadir Categorias..."
              required/>
              <div className="buttonsKitchen">
                  <button  className="add-area-btn" >
                  {editItem !==null ? 'Editar' : 'Añadir'}
                  </button>
              </div>
        </form>
    )
}
 
export default CategoryForm;