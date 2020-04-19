import React, {useContext} from 'react'
import {AreaListContext} from './AreaListContext';
import Area from './Area';


const AreaList = () => {
    
    const {areas} = useContext(AreaListContext);
    
    return (

        <div>
            {areas.length ? (
                <ul className="listKitchen">
                {areas.map((area)=>{
                    return <Area area={area} key={area._id}/>
                })}
                </ul>
            ):(
                <div className="no-areas">Por ahora no hay ningún área de cocina agregada</div>
            )}
           
        </div>
    )
}

export default AreaList