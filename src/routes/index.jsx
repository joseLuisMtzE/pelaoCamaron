import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Este es de prueba y solo ilustrativo de un spinner para mostrar mienstras los componenntes cargan
import Spinner from '../shared/ejemplo_spinner';
const Layout = lazy(() => import('../pages/Layout/Sidernav'));
const Tables = lazy(() => import('../pages/Tables'));
const AddDishes = lazy(() => import('../pages/AddDishes'));
const Home = lazy(() => import('../pages/Home'));
const Ticket = lazy(() => import('../pages/Ticket'));
const CloseOrderPage = lazy(() => import('../pages/CloseOrderPage'));
const Login = lazy(() => import('../pages/LoginPage'));
const HomeDelivery = lazy(() => import('../pages/HomeDelivery'));
const MenuDishes = lazy(() => import('../pages/MenuDishesPage'));
const KitchenArea = lazy(() => import('../pages/KitchenArea'));
const Categories = lazy(() => import('../pages/Categories'));
const usersView = lazy(() => import('../pages/Userview'));
const OrdersView = lazy(() => import('../pages/OrdersView'));
const Discount = lazy(() => import('../components/Discounts/Discount'));
const Pedidos = lazy(() => import('../pages/Pedidos'));

const OrderView = lazy(() => import('../pages/OrderView'));

export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={<Spinner size={130} />}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/cerrar-orden" component={CloseOrderPage} />
              <Route exact path="/mesas" component={Tables} />
              <Route exact path="/agregar-platillos/:id" component={AddDishes} />
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
              <Route exact path="/vista-usuarios" component={usersView} />
              <Route exact path="/ticket/:id" component={Ticket} />
              <Route exact path="/OrdersView" component={OrdersView} />
              <Route exact path="/ver-orden/:id" component={OrderView} />
              <Route exact path="/descuento/:id" component={Discount} />
              <Route exact path="/Pedidos" component={Pedidos} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
