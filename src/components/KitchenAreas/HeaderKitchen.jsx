import React from 'react';
import Icon from '@mdi/react'
import { mdiStove } from '@mdi/js';


const HeaderKitchen = () => {
    return (
        <div className="headerKitchen">
        <Icon path={mdiStove}
        title="Estufa"
        size={3}
        color="#E8624F"
        /> 
        <h1>Áreas de cocina</h1>
        </div>
    )
}

export default HeaderKitchen;
