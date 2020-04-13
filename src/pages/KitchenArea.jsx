import React,{Fragment,useState} from 'react';
import AreaList from '../components/AreaList';
import AreaForm from '../components/AreaForm';
import Header from '../components/Header';
import AreaListContext from '../components/AreaListContext';
import Spinner from '../shared/Spinner';

const KitchenArea = () => {

  const [load, setLoad]= useState(false);

    return ( 
      <Fragment>
      <AreaListContext setLoad={setLoad}>
        <center>
      <div className="container-kitchen">
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