import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TextField, RaisedButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {TitleBar} from 'react-desktop/windows';
import './styles/form.css';

class Form extends Component {

  static defaultProps = {
    color: '#A5D6A7',
    theme: 'light'
  };

  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
    };
  }
  handleChange = (event, name) => {
    if(name == 'firstname'){
      this.setState({firstname: event.target.value});
    }
    if(name == 'lastname'){
      this.setState({lastname: event.target.value});
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
        <div id = 'nameEntry'>
        <TextField
        className = 'textfield'
        hintText="First Name"
        onChange ={this.handleChange('firstname')}
        />
        <TextField
        className = 'textfield'
        hintText="Last Name"
        onChange = {this.handleChange('lastname')}
        />
        </div>
        <RaisedButton 
        className = "button"
        label="Submit Name" 
        primary = {true}/>
        </MuiThemeProvider>
        
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
};


