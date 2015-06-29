/* -||- app/app-routes.jsx -||- */

import React from 'react';
//import {Route, DefaultRoute} from 'react-router';
import Router, {Router, Route, DefaultRoute} from 'react-router';
//import {Router, Route, DefaultRoute} from 'react-router';


import Master from './components/master';
import Base from './components/pages/base';
import Home from './components/pages/home';
import About from './components/pages/about';
import Rooms from './components/pages/rooms';
// energize
//import AppLayout from './layouts/appContainer';
//import Home1 from './pages/homePage';


// -||- application routing -||-
const main = (
  <Route name="root" handler={Master} path="/">
    {/* inject:route */}
    <Route name="base" handler={Base} path="/base" />
    <Route name="home" handler={Home} path="/home" />
    <Route name="about" handler={About} path="/about" />
    <Route name="rooms" handler={Rooms} path="/rooms" />
    {/* endinject */}
    <DefaultRoute handler={Base} />
  </Route>
);

export function create(routes) {
  return Router.create({ 'routes': routes });
}

export {main};
