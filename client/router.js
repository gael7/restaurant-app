import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Index from './index.js';
import Registration from './registration.js';


const routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={Index}/>
    <Route path="registration/:id" component={Registration}/>
  </Route>
);

export default routes;
