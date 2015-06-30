/* -||- app.jsx -||- */

import 'es6-shim';
import 'whatwg-fetch';

import React from 'react';
import Router, {HistoryLocation} from 'react-router';
import {main} from './app-routes';


require('../www/favicon.ico');
require('../sass/app.scss');


document.addEventListener('DOMContentLoaded', function(){
  Router.run(main, HistoryLocation, (View, state) => {
    React.render(<View {...state} />, document.body);
  });
});
