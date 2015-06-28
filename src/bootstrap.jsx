import 'es6-shim';
import 'whatwg-fetch';

import React from 'react';
import Router, {HistoryLocation} from 'react-router';
import {main} from './components/routes';


// Material UI :: http://material-ui.com/#/get-started
// needed for onTouchTap, not needed when react 1.0 released
var injectTapEventPlugin = require("react-tap-event-plugin");
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


require('../assets/media/favicon.ico');
require('./components/app.scss');
/*
<link rel="stylesheet" type="text/css" href="css/dragon.ninja.css">
<link rel="stylesheet" type="text/css" href="css/roomapp.ninja.css">
<link rel="stylesheet" type="text/css" href="css/chatapp.ninja.css">
<link rel="stylesheet" type="text/css" href="css/todoapp.ninja.css">
*/

document.addEventListener('DOMContentLoaded', function(){
  Router.run(main, HistoryLocation, (View, state) => {
    React.render(<View {...state} />, document.body);
  });
});
