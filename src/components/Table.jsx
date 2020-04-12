import React from 'react';
import {Card} from 'antd';

export default function Table({index,table}){

  var title= `${index+1}`;
  return(
    <Card title={title} style={{margin: 10,backgroundColor:'#FFD892',borderRadius:25,height:175}}>
      <p>{`Mesero: ${table.mesero}`}</p>
      {!table.reservada ? 
        <div style={{borderRadius:'100%',background: table.disponible ? '#7FDC90' : '#D08B8C',height:25,width:25,right: 10,bottom:10,position:'absolute'}}></div>
        : <div style={{borderRadius:'100%',background: '#6AC7E6',height:25,width:25,right: 10,bottom:10,position:'absolute'}}></div>}
    </Card>
  );
}