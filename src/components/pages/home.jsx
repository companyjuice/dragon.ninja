/* Home.jsx */
/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let AppBar = mui.AppBar;
let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Home = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.limeA700
    });
  },

  render() {

    let containerStyle = {
      textAlign: 'center',
      paddingTop: '60px'
    };

    let standardActions = [
      { text: '-|x|-' }
    ];

    return (
      <div id="trackdragon" style={containerStyle}>
      	<AppBar title='track|>ragon' iconClassNameRight="muidocs-icon-navigation-expand-more"/>
      	<h1 ref="title">Welcome, ninja.</h1>
				<p>Let us create together for much win !!</p>
				<RaisedButton label="Get Started |>" />
      </div>
    );
  }/*,

  _handleTouchTap() {
    this.refs.ninjaSecretPasswordDialog.show();
  }*/

});

module.exports = Home;
/*
<p>
	I am your `trackdragon`. Think of me as a loyal pet, a good friend, or a family member (one you like), and I do make mistakes occasionally. 
	You can call me `dragon` or `trackdragon`, and ask me do stuff on your command: `yo dragon`.
</p>
<p>Let us build and create together for much win !!</p>
<h2 className="center-align">-||- Beware : Dragon Testing -||-</h2>
<pre className="center-align"><code className="language-dragon">

	| ____-||-____ | ____-||-____ | ____-||-____ | ____-||-____ |<br/>
	| -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- |<br/>
	| -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- |<br/>
	| -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- |<br/>
	| ____________ | ____________ | ____________ | ____________ |<br/>
	| ____-||-____ | ____-||-____ | ____-||-____ | ____-||-____ |<br/>
	| -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- |<br/>
	| -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- |<br/>
	| -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- |<br/>
	| ____________ | ____________ | ____________ | ____________ |<br/>
	| ____-||-____ | ____-||-____ | ____-||-____ | ____-||-____ |<br/>
	| -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- |<br/>
	| -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- |<br/>
	| -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- |<br/>
	| ____________ | ____________ | ____________ | ____________ |<br/>
	| ____-||-____ | ____-||-____ | ____-||-____ | ____-||-____ |<br/>
	| -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- |<br/>
	| -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- |<br/>
	| -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- |<br/>
	| ____________ | ____________ | ____________ | ____________ |<br/>

</code></pre>
*/