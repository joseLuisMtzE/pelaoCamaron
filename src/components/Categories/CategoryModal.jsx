import React, {Fragment,useState,useContext, useEffect} from 'react'
import { Modal, Button } from 'antd';
import CategotyForm from './CategoryForm';
import Icon from '@mdi/react'
import { mdiPlusThick } from '@mdi/js';
import {CategoryListContext} from './CategoryListContext';

const CategoryModal = () => {

    const [state, setState] = useState({ visible: false });

    const {setEditItem, editItem} = useContext(CategoryListContext);

   const showModal = () => {
      setState({
        visible: true,
      });
    };
  
    const handleOk = () => {
      setTimeout(() => {
        setState({ visible: false });
      }, 1000);
    };
  
    const handleCancel = () => {
      if(editItem!==null){
      setEditItem(null);}
      setState({ visible: false });
    };

    useEffect(()=>{    
      if(editItem !== null){
          showModal();
      } 
  },[editItem]);
  
  
    //--------FORM
   
    return ( 
        <Fragment>
        <Button type="primary" shape="circle" className="btnModal" onClick={showModal}
        style={{
          margin: 6,
          width: 50,
          height: 50,
          border: 'none',
          boxShadow: '0px 3px 5px 0px grey',
        }}
        >
        <Icon path={mdiPlusThick}
        title="añadir"
        size={.8}
        color="#FFF"
        /> 
        </Button>
        <Modal
          title="Categoría"
          visible={state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
            footer={[]}
          >
            <div>
                <CategotyForm  onOk={handleOk} showModal={showModal}/>
            </div>
        </Modal>
        </Fragment>
     );
}
 
export default CategoryModal;