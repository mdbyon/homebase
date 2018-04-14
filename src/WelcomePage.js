import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {TitleBar} from 'react-desktop/windows';
import './styles/form.css';
import RegisterForm from './RegisterForm.js';

class WelcomePage extends Component {

  static defaultProps = {
    color: '#1A237E',
    theme: 'dark'
  };

  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      isRegistered: false,
    };
  }
  
  handleChange = (event, entry) => {
    if(entry === 'firstname'){
      this.setState({firstname: event.target.value});
    }
    if(entry === 'lastname'){
      this.setState({lastname: event.target.value});
    }
    if(entry === 'email'){
      this.setState({email: event.target.value});
    }
  }

  render() {

    return (
      
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <TitleBar
          title="Community Service Tracker"
          controls
          isMaximized={this.state.isMaximized}
          theme={this.props.theme}
          background={this.props.color}
          />
          <RegisterForm 
          handleFirstName = {this.handleChange('firstname')}
          handleLastName = {this.handleChange('lastname')}
          handleEmail = {this.handleChange('email')}
          />
  
        </div>
      </MuiThemeProvider>
        
      
    );
  }
} 

export default WelcomePage;

WelcomePage.propTypes = {
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
};


