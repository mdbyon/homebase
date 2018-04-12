import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {TitleBar} from 'react-desktop/windows';
import './styles/form.css';
import RegisterForm from './RegisterForm.js';

class WelcomeForm extends Component {

  static defaultProps = {
    color: '#A5D6A7',
    theme: 'light'
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
    if(entry == 'firstname'){
      this.setState({firstname: event.target.value});
    }
    if(entry == 'lastname'){
      this.setState({lastname: event.target.value});
    }
    if(entry == 'email'){
      this.setState({email: event.target.value});
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
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
        </MuiThemeProvider>
        
      </div>
    );
  }
} 

export default WelcomeForm;

WelcomeForm.propTypes = {
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
};


