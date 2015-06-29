/* -||- master.jsx -||- */

import React from 'react';
import Router, {RouteHandler} from 'react-router';

import Nav from './layouts/nav';
import Banner from './layouts/banner';
import Status from './layouts/status';


// Material UI 
// :: http://material-ui.com/#/get-started
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
// needed for onTouchTap, not needed when react 1.0 released
//var injectTapEventPlugin = require("react-tap-event-plugin");
let injectTapEventPlugin = require("react-tap-event-plugin");
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


let AppCanvas = mui.AppCanvas;
let AppBar = mui.AppBar;
let LeftNav = mui.LeftNav;

let menuItems = [
  // inject:menuitems
  { payload: 'root', text: '-||- ' },
  { payload: 'base', text: '-||- Base' },
  { payload: 'home', text: '-||- Home' },
  { payload: 'about', text: '-||- About' },
  { payload: 'rooms', text: '-||- Rooms' },
  // endinject
];

let titles = {
  // inject:titles
  '/root': 'Root -||-',
  '/base': 'Base -||-',
  '/home': 'Home -||-',
  '/about': 'About -||-',
  '/rooms': 'Rooms -||-',
  // endinject
};


// -||- React Class [RC] (of React Elements [RE])
// -||- Sub-Component [SC]
let NinjaNav = React.createClass({

	// mixins -??-
  mixins: [Router.Navigation],


  toggle:function () {
    this.refs.leftNav.toggle();
  },

  close: function () {
    this.refs.leftNav.close()
  },

  _onLeftNavChange: function(e, selectedIndex, menuItem) {
    this.transitionTo(menuItem.payload);
    this.refs.leftNav.close();
  },

  render: function () {
    // Optional: add a header to the left navigation bar, by setting
    // the `LeftNav`'s `header` property to a React component, like so:
    //   header={<div className='logo'>Company Juice</div>}
    return (
      <LeftNav
        ref="leftNav"
        docked={true}
        header={<div className='brand-logo'></div>}
        isInitiallyOpen={true}
        menuItems={this.props.menuItems}
        onClick={this._onLeftNavChange}
        onChange={this._onLeftNavChange} />
    );
  }
});


let Master = React.createClass({

	// mixins -??-
  mixins: [Router.State],

    
  /* for mui ThemeManager */
  childContextTypes: {
      muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
      return {
          muiTheme: ThemeManager.getCurrentTheme()
      };
  },
  /* end for mui ThemeManager */


  // for AppBar
  _onMenuIconButtonTouchTap: function () {
    this.refs.leftNav.toggle();
  },

  // -||-
  render: function () {
    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          title={titles[this.getPath()]}
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          zDepth={0}>
        </AppBar>

        <NinjaNav 
        	ref='leftNav' 
        	menuItems={menuItems} />

        <main>
          <div className='mui-app-content-canvas'>
            <RouteHandler />
          </div>
        </main>

        <Banner />
        <Status />
        <Nav />

      </AppCanvas>
    );
  }
});

module.exports = Master;
