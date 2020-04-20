import React,{Fragment,useState} from 'react';
import AreaList from '../components/KitchenAreas/AreaList';
import AreaForm from '../components/KitchenAreas/AreaForm';
import Header from '../components/KitchenAreas/HeaderKitchen';
import AreaListContext from '../components/KitchenAreas/AreaListContext';
import Spinner from '../shared/Spinner';

const KitchenArea = () => {

  const [load, setLoad]= useState(false);

    return ( 
      <Fragment>
      <AreaListContext setLoad={setLoad}>
      <center>
      <div className="container-kitchen background-crud">
          <Header/>
             <AreaForm/>
             {load ? <Spinner/> :  <AreaList/>}
      </div>
      </center>

      </AreaListContext>
    </Fragment>
     ); 
}
 
export default KitchenArea;