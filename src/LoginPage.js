import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LoginForm from 'grommet/components/LoginForm';
import {TitleBar} from 'react-desktop/windows';
import App from 'grommet/components/App';
import 'grommet/grommet.min.css';
import './styles/form.css';
import RegisterForm from './RegisterForm.js';

class LoginPage extends Component {

  static defaultProps = {
    color: '#1A237E',
    theme: 'dark'
  };

  constructor(props){
    super(props);
  }

  render() {

    return (
     <App> 
        <div id = 'WelcomeWrapper'>
          <TitleBar
          title="myCommunityService"
          theme={this.props.theme}
          background={this.props.color}
          />
        </div>
      </App>
    );
  }
} 

export default LoginPage;

LoginPage.propTypes = {
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
};


