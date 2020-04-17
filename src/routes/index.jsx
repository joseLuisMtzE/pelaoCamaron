import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Este es de prueba y solo ilustrativo de un spinner para mostrar mienstras los componenntes cargan
import Spinner from '../shared/ejemplo_spinner';

const Tables = lazy(() => import('../pages/Tables'));
const AddDishes = lazy(() => import('../pages/AddDishes'));

export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={<Spinner size={130} />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/mesas" component={Tables} />
            <Route exact path="/agregar-platillos" component={AddDishes} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
