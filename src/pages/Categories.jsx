import React,{Fragment,useState} from 'react';
import CategoryList from '../components/CategoryList';
import CategoryForm from '../components/CategoryForm';
import HeaderCategory from '../components/HeaderCategory';
import CategoryListContext from '../components/CategoryListContext';
import Spinner from '../shared/Spinner';

const Categories = () => {

    const [load, setLoad]= useState(false);
    return ( 
        <Fragment>
        <CategoryListContext setLoad={setLoad}>
        <center>
        <div  className="container-kitchen">
        <HeaderCategory/>
        <CategoryForm/>
        {load ? <Spinner/> : <CategoryList/>}
        </div>
        </center>
        </CategoryListContext>
        </Fragment>
     );
}
 
export default Categories;