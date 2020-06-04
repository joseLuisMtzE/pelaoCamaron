import React, { Fragment, useState } from 'react';
import AreaList from '../components/KitchenAreas/AreaList';
import Header from '../components/KitchenAreas/HeaderKitchen';
import AreaListContext from '../components/KitchenAreas/AreaListContext';
import Spinner from '../shared/Spinner';
import { getRol } from '../shared/ApiWrapper';
import AreaModal from '../components/KitchenAreas/AreaModal';

const KitchenArea = () => {
  const [load, setLoad] = useState(false);

  return (
    <Fragment>
      <div className="container-kitchen">
        <AreaListContext setLoad={setLoad}>
          <center>
            <div className="headerCRUD">
              <Header />
            </div>
          </center>
          {load ? <Spinner /> : <AreaList />}
          {getRol() === 'Dueño' || getRol() === 'Caja' ? <AreaModal /> : null}
        </AreaListContext>
      </div>
    </Fragment>
  );
};

export default KitchenArea;
