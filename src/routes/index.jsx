import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';


//Este es de prueba y solo ilustrativo de un spinner para mostrar mienstras los componenntes cargan
import Spinner from '../shared/ejemplo_spinner';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/LoginPage'));
const HomeDelivery = lazy(()=>import('../pages/HomeDelivery'))
const MenuDishes = lazy(()=>import('../pages/MenuDishesPage'))

//const pruebas = lazy(()=>import('../pages/pruebas'))<Route exact path="/pruebas" component={pruebas} />



export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={<Spinner size={130} />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home-delivery" component={HomeDelivery} />
            <Route exact path="/menu-dishes" component={MenuDishes} />
            

          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
