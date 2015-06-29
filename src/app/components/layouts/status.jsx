import React from 'react';
import classNames from 'classnames';
import {config} from '../../../shared';

// integrate with jQuery js library
//import jQuery from 'jquery';
//var $ = require('jquery');
//var $ = window.jQuery;
//var jQuery = $;
//var $ = jQuery;

// include Status styles
require('./status.scss');

export default class Status extends React.Component {

  componentDidMount() {
    //$('.row').css('border', '1px solid #80BD01');
    //$('.darken-3').css('border', '2px solid red').css('background-color', '#222222 !important');
    //$('.s6').first().css('border', '2px solid white');
  }

  render() {
    return (
      <div className='row'>
	      <div className={classNames('status', config.theme)}>
	      	<div className={classNames('col', 's6')}>
	      		<div className={classNames('container', 'left-align')}>
	      			-||- <a href="https://github.com/companyjuice/dragon.ninja" target="_blank">dragon.ninja</a>
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
