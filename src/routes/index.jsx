import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Este es de prueba y solo ilustrativo de un spinner para mostrar mienstras los componenntes cargan
import Spinner from '../shared/ejemplo_spinner';
import ComandasTodas from '../components/Comandas/ComandasTodas';
const Layout = lazy(() => import('../pages/Layout/Sidernav'));
const Tables = lazy(() => import('../pages/Tables'));
const AddDishes = lazy(() => import('../pages/AddDishes'));
const Ticket = lazy(() => import('../pages/Ticket'));
const CloseOrderPage = lazy(() => import('../pages/CloseOrderPage'));
const Login = lazy(() => import('../pages/LoginPage'));
const HomeDelivery = lazy(() => import('../pages/HomeDelivery'));
const EditHomeDelivery = lazy(() => import('../pages/EditHomeDelivery'));
const MenuDishes = lazy(() => import('../pages/MenuDishesPage'));
const KitchenArea = lazy(() => import('../pages/KitchenArea'));
const Categories = lazy(() => import('../pages/Categories'));
const usersView = lazy(() => import('../pages/Userview'));
const OrdersView = lazy(() => import('../pages/OrdersView'));
const Discount = lazy(() => import('../components/Discounts/Discount'));
const usersEdit = lazy(() => import('../components/UsersView/UserEdit'));
const ComandasPage = lazy(() => import('../pages/ComandasPage'));

const OrderView = lazy(() => import('../pages/OrderView'));
/*
              <Route exact path="/comandas-todas" component={ComandasTodas} /> */

export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={<Spinner size={130} />}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/cerrar-orden" component={CloseOrderPage} />
              <Route exact path="/mesas" component={Tables} />
              <Route
                exact
                path="/agregar-platillos/:id"
                component={AddDishes}
              />
              <Route exact path="/home-delivery" component={HomeDelivery} />
              <Route exact path="/edit-home-delivery" component={EditHomeDelivery} />

              <Route exact path="/" component={Login} />
              <Route exact path="/menu-dishes" component={MenuDishes} />
              <Route exact path="/areas-cocina" component={KitchenArea} />
              <Route
                exact
                path="/categorias-alimentos"
                component={Categories}
              />
              <Route exact path="/ticket/:id" component={Ticket} />

              <Route exact path="/ver-orden/:id" component={OrderView} />
              <Route
                exact
                path="/ordenes-vista-general"
                component={OrdersView}
              />
              <Route exact path="/descuento/:id" component={Discount} />
              <Route exact path="/comandas" component={ComandasPage} />
              <Route
                exact
                path="/comandas/todas"
                render={() => <ComandasTodas areas={[]} />}
              />

              <Route exact path="/vista-usuarios" component={usersView} />
              <Route exact path="/Editar-usuario" component={usersEdit} />
              <Route exact path="/Editar-usuario/:id" component={usersEdit} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
