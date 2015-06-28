/* Main.jsx */
/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Main = React.createClass({

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
        <Dialog
          title="Ninja Secret Password"
          actions={standardActions}
          ref="ninjaSecretPasswordDialog">

          ____-||-____<br/>
					-|•|-::-|•|-<br/>
					-(¯`•..•´¯)-<br/>
					-\^|++++|^/-<br/>
          -'\_-||-_/'-<br/>
          						<br/>
          trackdragon

        </Dialog>
		    <div>
		    	<h1 ref="title">Welcome, ninja.</h1>
		    	<p>	I am `trackdragon`, or simply `dragon`.<br/>
		    			I respond to commands with: `yo dragon`.
		    	</p>
					<p>Let us create together for much win !!</p>
					<RaisedButton label="Get Started" />
					<RaisedButton label="Ninja Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
      	</div>
		  </div>
    );
  },

  _handleTouchTap() {
    this.refs.ninjaSecretPasswordDialog.show();
  }

});

module.exports = Main;

/*
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
