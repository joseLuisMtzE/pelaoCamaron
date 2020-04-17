import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//Este es de prueba y solo ilustrativo de un spinner para mostrar mienstras los componenntes cargan
import Spinner from '../shared/ejemplo_spinner';

const Home = lazy(() => import('../pages/Home'));
const ClosingAccount = lazy(() => import('../pages/ClosingAccounts'));
const paraborrar = lazy(() => import('../pages/paraborrar'));
export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={<Spinner size={130} />}>
        <BrowserRouter>
          <Switch>
            <Route  exact path="/" component={Home} />
            <Route  exact path="/cierre-cuenta" component={ClosingAccount} />
            <Route  exact path="/prueba" component={paraborrar} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
