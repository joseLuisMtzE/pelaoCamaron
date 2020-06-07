import React from 'react'
import MenuDishes from '../components/MenuDishes/MenuDishes'
import MenuDishesContext from '../components/MenuDishes/MenuDishesContext'
//import Form from '../components/Molecules/FormHomeDelivery'

function MenuDishesPage() {
    return (
        <div>
            <MenuDishesContext>
                <MenuDishes/>
            </MenuDishesContext>
        </div>
    )
}

export default MenuDishesPage
