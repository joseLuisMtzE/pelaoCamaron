import React, { Fragment, useState } from 'react';
import CategoryList from '../components/Categories/CategoryList';
import HeaderCategory from '../components/Categories/HeaderCategory';
import CategoryListContext from '../components/Categories/CategoryListContext';
import CategoryModal from '../components/Categories/CategoryModal';
import { getRol } from '../shared/ApiWrapper';
import Spinner from '../shared/Spinner';

const Categories = () => {
  const [load, setLoad] = useState(false);
  return (
    <Fragment>
      <CategoryListContext setLoad={setLoad}>
        <div className="container-kitchen">
          <center>
            <div className="headerCRUD">
              <HeaderCategory />
            </div>
          </center>
          {load ? <Spinner /> : <CategoryList />}
          {getRol() === 'Dueño' || getRol() === 'Caja' ? (
            <CategoryModal />
          ) : null}
        </div>
      </CategoryListContext>
    </Fragment>
  );
};

export default Categories;
