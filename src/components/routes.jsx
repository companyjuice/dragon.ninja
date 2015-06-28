import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';

// generator-alt (generator-material inject:pagerequire)
import App from './app';
import Main from './pages/main';
import Home from './pages/home';
import About from './pages/about';
import Rooms from './pages/rooms';

// energize
//import AppLayout from './layouts/appContainer';
//import Home1 from './pages/homePage';

//(generator-material)

var menuItems = [
  // inject:menuitems
  { payload: 'main', text: '-||- dragon.ninja' },
  { payload: 'home', text: 'Home' },
  { payload: 'about', text: 'About' },
  { payload: 'rooms', text: 'Rooms' },
  // endinject
];

var titles = {
  // inject:titles
  '/main': 'dragon.ninja',
  '/home': 'Home',
  '/about': 'About',
  '/rooms': 'Rooms',
  // endinject
};

// ------- application routing -------
// rem: const main != handler {Main}
// but both are along the "main" line
const main = (
  <Route name="app" handler={App} path="/">
    {/* inject:route */}
    <Route name="main" handler={Main} path="/" />
    <Route name="home" handler={Home} path="/home" />
    <Route name="about" handler={About} path="/about" />
    <Route name="rooms" handler={Rooms} path="/rooms" />
    {/* endinject */}
    <DefaultRoute handler={Main} />
  </Route>
);

export function create(routes) {
  return Router.create({ 'routes': routes });
}

export {main};
