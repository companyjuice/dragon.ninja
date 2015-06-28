import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';
import {config} from '../../../shared';

// integrate with jQuery js library
//import jQuery from 'jquery';
//var $ = jQuery;
//window.jQuery = jQuery;


// include Nav styles
require('./styles.scss');

export default class Nav extends React.Component {

  componentDidMount() {
    //$('.button-collapse').sideNav({closeOnClick: true});
  }

  render() {
    return (
      <nav className={classNames('fixed-navbar', config.theme)}>
        <div className="container nav-wrapper">

          <a href="/" className="brand-logo">track|>ragon</a>

          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="mdi-navigation-menu"></i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="home">+ Room</Link>
            </li>
            <li>
              <Link to="home">+ Project</Link>
            </li>
            <li>
              <Link to="about">-||- ninja</Link>
            </li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li>
              <Link to="home">+ Create Room</Link>
            </li>
            <li>
              <Link to="home">+ Create Project</Link>
            </li>
            <li>
              <Link to="about">-||- ninja</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
