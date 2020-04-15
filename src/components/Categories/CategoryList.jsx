import React, {useContext} from 'react';
import {CategoryListContext} from './CategoryListContext';
import Category from './Category';

const CategoryList = () => {
    
    const {categories} = useContext(CategoryListContext);
    
    return (

        <div>
            {categories.length ? (
                <ul className="listKitchen">
                {categories.map((category)=>{
                    return <Category category={category} key={category.id}/>
                })}
                </ul>
            ):(
                <div className="no-categories">Por ahora no hay ninguna categoria agregada</div>
            )}
           
        </div>
    )
}

export default CategoryList