import React,{Fragment,useState} from 'react';
import CategoryList from '../components/Categories/CategoryList';
import CategoryForm from '../components/Categories/CategoryForm';
import HeaderCategory from '../components/Categories/HeaderCategory';
import CategoryListContext from '../components/Categories/CategoryListContext';
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