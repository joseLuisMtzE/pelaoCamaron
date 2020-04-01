import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Este es de prueba y solo ilustrativo de un spinner para mostrar mienstras los componenntes cargan
import Spinner from '../shared/ejemplo_spinner';

const Home = lazy(() => import('../pages/Home'));

export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={<Spinner size={130} />}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
