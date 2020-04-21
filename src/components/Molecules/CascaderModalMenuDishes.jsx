import React, { useState } from 'react';
import {Cascader} from 'antd';


function CascaderModalMenuDishes() {
    const options = [
        {
          value: '10',
          label: '10 min'
        },
        {
            value: "15",
            label: "15 min"
        },
        {
            value: "20",
            label: "20 min"
        }
        ,
        {
            value: "30",
            label: "30 min"
        },
        {
            value: "40",
            label: "40 min"
        },
        {
            value: "50",
            label: "50 min"
        }
    ]

    const onChange=(value)=> {
        console.log(typeof(value))
        if(value[0]){
            console.log(value[0])
        }
        
    }

    return (
        <div>
            <Cascader id="cascaderHomeDelivery" options={options} onChange={onChange} placeholder="0 min" />
        </div>
    )
}

export default CascaderModalMenuDishes
