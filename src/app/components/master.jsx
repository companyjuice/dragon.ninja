/* -||- app/components/master.jsx -||- */

/* from mui docs */

let React = require('react');
let Router = require('react-router');
let AppLeftNav = require('./app-left-nav');
let FullWidthSection = require('./full-width-section');
let { AppBar, AppCanvas, IconButton, Menu, Styles } = require('material-ui');

let RouteHandler = Router.RouteHandler;
let { Colors, Spacing, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager();

//let Spacing = require('../spacing');


class Master extends React.Component {

  constructor() {
    super();
    this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  componentWillMount() {
  	// set theme type (LIGHT or DARK)
  	ThemeManager.setTheme(ThemeManager.types.DARK);
  	// set theme component overrides
    ThemeManager.setComponentThemes({
      appBar: {
        color: Colors.grey900,
        textColor: Colors.darkWhite,
        height: Spacing.desktopKeylineIncrement
      }
    });
  }

  getStyles() {
    let darkWhite = Colors.darkWhite;
    return {
      footer: {
        backgroundColor: Colors.grey900,
        textAlign: 'center'
      },
      a: {
        color: darkWhite
      },
      p: {
        margin: '0 auto',
        padding: '0',
        color: Colors.lightWhite,
        maxWidth: '335px'
      },
      iconButton: {
        color: darkWhite
      }
    };
  }

  render() {
    let styles = this.getStyles();
    let title =
      this.context.router.isActive('get-started') ? 'Get Started' :
      this.context.router.isActive('customization') ? 'Customization' :
      this.context.router.isActive('components') ? 'Components' : '';

    let githubButton = (
      <IconButton
        iconStyle={styles.iconButton}
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/companyjuice/dragon.ninja"
        linkButton={true} />
    );

    return (
      <AppCanvas>

        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          zDepth={0}
          iconElementRight={githubButton}/>

        <AppLeftNav ref="leftNav" />

        <RouteHandler />

        <FullWidthSection style={styles.footer}>
          <p style={styles.p}>
            Hand fed with love by the dragoneers at <a style={styles.a} href="http://companyjuice.com">Company Juice</a> and our
            ninja <a style={styles.a} href="https://github.com/companyjuice/dragon.ninja/graphs/contributors">contributors</a>.
          </p>
          {githubButton}
        </FullWidthSection>

      </AppCanvas>
    );
  }

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }
}

Master.contextTypes = {
  router: React.PropTypes.func
};

Master.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = Master;
