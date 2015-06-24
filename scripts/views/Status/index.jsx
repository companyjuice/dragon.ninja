import React from 'react';
import classNames from 'classnames';
import {config} from '../../shared';

// integrate with jQuery js library
//import jQuery from "jquery";
var $ = require('jquery');
//var $ = jQuery;
var jQuery = $;

// integrate with Materialize css library
//require('../../../node_modules/materialize-css/bin/materialize.css');
//var materialize = require('../../../node_modules/materialize-css/bin/materialize');

require('../../../assets/materialize-src/sass/materialize.scss');

require('./styles.scss');

export default class Status extends React.Component {

  componentDidMount() {
    $('.status').first().css('border', '1px solid #111');
  }

  render() {
    return (
      <div className='row'>
	      <div className={classNames('status', config.theme)}>
	      	<div className={classNames('col', 's6')}>
	      		<div className={classNames('container', 'left-align')}>
	      			-||- <a href="https://github.com/martymcgee/dragon.ninja" target="_blank">dragon.ninja</a>
		        </div>
	      	</div>
	      	<div className={classNames('col', 's6')}>
	      		<div className={classNames('container', 'right-align')}>
		          status: [fired up]
		        </div>
	      	</div>
	    	</div>
      </div>
    );
  }
}
