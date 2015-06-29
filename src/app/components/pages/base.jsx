/* Base.jsx */

let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Base = React.createClass({

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
      paddingTop: '100px',
      paddingBottom: '100px'
    };

    let standardActions = [
      { text: '-|x|-' }
    ];

    return (
      <div id="trackdragon" style={containerStyle}>
        <Dialog
          title="Secret Ninja Password"
          actions={standardActions}
          ref="secretPasswordDialog">

          ____-||-____<br/>
					-|•|-::-|•|-<br/>
					-(¯`•..•´¯)-<br/>
					-\^|++++|^/-<br/>
          -'\_-||-_/'-<br/>
          						<br/>
          trackdragon

        </Dialog>
        <Dialog
          title="Get Started"
          actions={standardActions}
          ref="getStartedDialog">

          TODO: 

        </Dialog>
		    <div>
		    	<h1 ref="title">Welcome, ninja.</h1>
		    	<p>	I am a `trackdragon` and `dragon` is my name.<br/>
		    			I respond to commands with: `yo dragon`.<br/>
              I will call you `ninja`.
		    	</p>
					<p>Let us create together for much win !!</p>
					<RaisedButton label="-||- Secret Ninja Password" onTouchTap={this._handleSecretPasswordTouchTap} />
          <RaisedButton label="Get Started |>" primary={true} onTouchTap={this._handleGetStartedTouchTap} />
      	</div>
		  </div>
    );
  },

  _handleSecretPasswordTouchTap() {
    this.refs.secretPasswordDialog.show();
  },

  _handleGetStartedTouchTap() {
    this.refs.getStartedDialog.show();
  }

});

module.exports = Base;

/*
<h2 className="center-align">
  -||- Testing :: Beware of Dragon -||-
</h2>
<pre className="center-align">
<code className="language-dragon">

	| ____-||-____ | ____-||-____ | ____-||-____ | ____-||-____ |
	| -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- |
	| -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- |
	| -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- |
	| ____________ | ____________ | ____________ | ____________ |
	| ____-||-____ | ____-||-____ | ____-||-____ | ____-||-____ |
	| -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- |
	| -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- |
	| -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- |
	| ____________ | ____________ | ____________ | ____________ |
	| ____-||-____ | ____-||-____ | ____-||-____ | ____-||-____ |
	| -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- |
	| -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- |
	| -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- |
	| ____________ | ____________ | ____________ | ____________ |
	| ____-||-____ | ____-||-____ | ____-||-____ | ____-||-____ |
	| -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- | -|•|-::-|•|- |
	| -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- | -(¯`•..•´¯)- |
	| -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- | -\^ -||- ^/- |
	| ____________ | ____________ | ____________ | ____________ |

</code>
</pre>
*/
