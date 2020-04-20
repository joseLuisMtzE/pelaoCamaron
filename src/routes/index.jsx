import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

//Este es de prueba y solo ilustrativo de un spinner para mostrar mienstras los componenntes cargan
import Spinner from '../shared/ejemplo_spinner';
const Layout = lazy(() => import('../pages/Layout/Sidernav'));

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/LoginPage'));
const HomeDelivery = lazy(() => import('../pages/HomeDelivery'));
const MenuDishes = lazy(() => import('../pages/MenuDishesPage'));
const KitchenArea = lazy(() => import('../pages/KitchenArea'));
const Categories = lazy(() => import('../pages/Categories'));

export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={<Spinner size={130} />}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/home-delivery" component={HomeDelivery} />
              <Route exact path="/menu-dishes" component={MenuDishes} />
              <Route exact path="/areas-cocina" component={KitchenArea} />
              <Route
                exact
                path="/categorias-alimentos"
                component={Categories}
              />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
