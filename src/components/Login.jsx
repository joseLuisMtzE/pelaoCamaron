import React,{useState} from 'react'
import Logo from '../assets/logo.png';
import { Card, Input, Button,Typography, Radio } from 'antd';
const { Title } = Typography; 



function Login() {
    const [user,setUser]=useState('')
    const [password,setPassword]=useState('');
    const [list,setList]=useState([])
    
    const LOCAL_STORAGE_KEY = "users";

    const checkLogin=()=>{
        const newList=list;
        newList.unshift({user:user, pass:password});
        setList([...newList])
        setUser('')
        setPassword('');
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
    }

    return (
        < >
        <div className="container">
        <div className="centerContent"  size="small">
          <img className="imgLogo" src={Logo} width="200px"/>
          
        </div>
      <div className="centerContent" >
        <Card  className="login-form-content">
             <Title level={2} >Iniciar Sesión</Title>
             <Input placeholder="Usuario" onChange={(e) => { setUser(e.target.value)}}/>
             <Input placeholder="Contraseña" onChange={(e) => { setPassword(e.target.value)}}/>
        </Card>
        <div  >
            <Button className="enterButton " type="primary" size="large" onClick={checkLogin} >Entrar</Button>
            
        </div>
      </div>
      </div>
  
      </>
    )
}

export default Login
