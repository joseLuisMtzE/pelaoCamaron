import React, {useContext} from 'react';
import {CategoryListContext} from './CategoryListContext';
import Category from './Category';

const CategoryList = () => {
    
    const {categories} = useContext(CategoryListContext);
    //console.log(categories)
    
    return (

        <div>
            {categories.length ? (
                <ul className="listKitchen">
                {categories.map((category)=>{
                    return <Category category={category} key={category._id}/>
                })}
                </ul>
            ):(
                <div className="no-areas">Por ahora no hay ninguna categoria agregada</div>
            )}
           
        </div>
    )
}

export default CategoryList