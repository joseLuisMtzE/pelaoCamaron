import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//Este es de prueba y solo ilustrativo de un spinner para mostrar mienstras los componenntes cargan
import Spinner from '../shared/ejemplo_spinner';

const Home = lazy(() => import('../pages/Home'));
const KitchenArea = lazy(()=> import ('../pages/KitchenArea'));
const Categories = lazy(()=> import ('../pages/Categories'));
const closeAccount = lazy(()=> import ('../pages/closeAccount'));

export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={<Spinner size={130} />}>
        <BrowserRouter>
          <Switch>
            <Route  exact path="/" component={Home} />
            <Route exact path="/areas-cocina" component={KitchenArea} />
            <Route exact path="/categorias-alimentos" component={Categories} />
            <Route  exact path="/cerrar-cuenta" component={closeAccount} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
