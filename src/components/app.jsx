import React from 'react';
import {RouteHandler} from 'react-router';

import Nav from './layouts/nav';
import Banner from './layouts/banner';
import Status from './layouts/status';


let mui = require('material-ui');
let injectTapEventPlugin = require("react-tap-event-plugin");

/* generator routes
// inject:pagerequire
var HomePage = require('./pages/HomePage');
var Pagename=aboutPage = require('./pages/Pagename=aboutPage');
var AboutPage = require('./pages/AboutPage');
var RoomPage = require('./pages/RoomPage');
// endinject

var menuItems = [
  // inject:menuitems
  { payload: 'home', text: 'dragon.ninja' },
  { payload: 'about', text: 'about' },
  { payload: 'room', text: 'Room' },
  // endinject
];

var titles = {
  // inject:titles
  '/home': 'dragon.ninja',
  '/about': 'about',
  '/room': 'Room',
  // endinject
};

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
*/

let AppCanvas = mui.AppCanvas;
let AppBar = mui.AppBar;
let LeftNav = mui.LeftNav;

injectTapEventPlugin();


let LeftNavComponent = React.createClass({

  mixins: [Router.Navigation],

  render() {
    // Optional: add a header to the left navigation bar, by setting
    // the `LeftNav`'s `header` property to a React component, like so:
    //   header={<div className='logo'>Header Title.</div>}
    return (
      <LeftNav
        ref="leftNav"
        header={<div className='logo'>-||- dragon.ninja ^0.2.0</div>}
        docked={false}
        isInitiallyOpen={true}
        menuItems={this.props.menuItems}
        onClick={this._onLeftNavChange}
        onChange={this._onLeftNavChange} />
    );
  },

  toggle() {
    this.refs.leftNav.toggle();
  },

  close() {
    this.refs.leftNav.close()
  },

  _onLeftNavChange(e, selectedIndex, menuItem) {
    this.transitionTo(menuItem.payload);
    this.refs.leftNav.close();
  }
});

/*
var Master = React.createClass({
  needs to go in "App" component below
  mixins: [Router.State],

  _onMenuIconButtonTouchTap: function () {
    this.refs.leftNav.toggle();
  },
  render: function () {
    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          className="mui-dark-theme"
          title={titles[this.getPath()]}
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          zDepth={0}>
        </AppBar>

        <LeftNavComponent ref='leftNav' menuItems={menuItems} />

        <div className='mui-app-content-canvas'>
          <RouteHandler />
        </div>

      </AppCanvas>
    );
  }
});
*/

/* generator routes
var routes = (
  <Route name='app' path='/' handler={Master}>
    {/* inject:route *//*}
    <Route name='home' handler={HomePage} />
    <Route name='pagename=about' handler={Pagename=aboutPage} />
    <Route name='about' handler={AboutPage} />
    <Route name='room' handler={RoomPage} />
    {*//* endinject *//*}
    <DefaultRoute handler={HomePage} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});
*/


export default class App extends React.Component {

  _onMenuIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  };
  
  render() {
    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          className="mui-dark-theme"
          title={titles[this.getPath()]}
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          zDepth={0}>
        </AppBar>

        <LeftNavComponent ref='leftNav' menuItems={menuItems} />

        <Nav />
        <Banner />
        <Status />

        <main>
          <div className='mui-app-content-canvas'>
            <RouteHandler />
          </div>
        </main>

      </AppCanvas>
    );
  }
}
