import React, {Component} from 'react';
import {TextField, RaisedButton} from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import PropTypes from 'prop-types';


class RegisterForm extends Component{
    constructor(props){
        super(props);
    }

    render() {

    return(
        <MuiThemeProvider>
            <div id = 'nameEntry'>
            <TextField
            className = 'textfield'
            hintText="First Name"
            onChange ={this.props.handleFirstName}
            />
            <TextField
            className = 'textfield'
            hintText="Last Name"
            onChange = {this.props.handleLastName}
            />
            </div>
            <div id = 'emailEntry'>
            <TextField
            className = 'textfield'
            hintText="Email Address"
            onChange = {this.props.handleEmail}
            />
            </div>
            <RaisedButton 
            className = "button"
            label="Submit" 
            primary = {true}/>
        </MuiThemeProvider>
        );
    }

}

export default RegisterForm

RegisterForm.propTypes = {
    handleFirstName: PropTypes.func.isRequired,
    handleLastName: PropTypes.func.isRequired,
    handleEmail: PropTypes.func.isRequired
  };
  