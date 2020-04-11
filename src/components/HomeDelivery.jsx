import React, {useState} from 'react'
import { Typography, Input,Cascader, Card, Button} from 'antd';
import '../styles/components/HomeDelivery.css'

const { Title } = Typography; 

function HomeDelivery() {

    const [name,setName]=useState('');
    const [phoneN,setPhoneN]=useState('');
    const [street,setStreet]=useState('');
    const [interiorN,setInteriorN]=useState('');
    const [outdoorN,setOutdoorN]=useState('');
    const [suburb, setSuburb] = useState('');
    const [reference, setReference] = useState('')

    const options = [
        {
          value: 'Efectivo',
          label: 'Efectivo'
        },
        {
            value: "Tarjeta",
            label: "Tarjeta"
        }
    ]

    return (
        <> 
        <div style={{backgroundColor:"#dc7171"}}>
        <div className="header-home-delivery" >
             <div className="header-img"></div>
            <div >
                <Button className="margin-10" type="primary" size={"small"} >atras</Button>
            </div>
            <div className="centerContent" >
                <h1 level={2} className="white-text-color" ><strong>Pedido a domicilio</strong></h1>
            </div>
            
        </div>
        
            <form action="" className="form-home-delivery">
                <Input className="inputs" size="large" placeholder="Nombre" value={name} onChange={(e) => { setName(e.target.value)}}/>
                <Input className="inputs" size="large" placeholder="Teléfono" value={phoneN} onChange={(e) => { setPhoneN(e.target.value)}}/>
                <Input className="inputs" size="large" placeholder="Calle" value={street} onChange={(e) => { setStreet(e.target.value)}}/>
                <Input className="inputs" size="large" placeholder="Número Ext." value={interiorN} onChange={(e) => { setInteriorN(e.target.value)}}/>
                <Input className="inputs" size="large" placeholder="Número Int." value={outdoorN} onChange={(e) => { setOutdoorN(e.target.value)}}/>
                <Input className="inputs" size="large" placeholder="Colonia" value={suburb} onChange={(e) => { setSuburb(e.target.value)}}/>
                <Input className="inputs" size="large" placeholder="Referencia" value={reference} onChange={(e) => { setReference(e.target.value)}}/>
            </form>

        <div className="centerContent" style={{padding:"1px"}} >
            <h1 className="white-text-color"> Total: 0.00$ </h1>
        </div>
        </div>
        <div className="centerContent footer-home-delivery" >
            <Cascader className="margin-10" options={options} onChange={""} placeholder="Pagará con..." />
            <div >
            <h2 className="white-text-color"><strong>Cambio:</strong>< h2 className="white-text-color"> 0.00$ </h2> </h2>
            
            </div>
            <Button type="primary">Confirmar</Button>

        </div>
        </>
    )
}

export default HomeDelivery
