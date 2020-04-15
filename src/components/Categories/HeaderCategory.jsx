import React from 'react';
import Icon from '@mdi/react'
import {mdiShapeOutline } from '@mdi/js';

const HeaderCategory = () => {
    return ( 
        <div className="headerKitchen">
        <Icon path={mdiShapeOutline}
        title="Categorias"
        size={3}
        color="#426BFF"
        /> 
            <h1>Categorías</h1>
        </div>
     );
}
 
export default HeaderCategory;