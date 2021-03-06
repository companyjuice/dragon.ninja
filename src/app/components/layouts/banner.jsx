import React from 'react';

require('./banner.scss');

export default class Banner extends React.Component {
  render() {
    return (
      <div className="banner valign-wrapper">
        <div className="container valign center-align">
          <a className="waves-effect waves-light btn-large" href="/#dragon">|>ragon</a>
        </div>
      </div>
    );
  }
}
