import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Redirect } from 'react-router-dom';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <Paper zDepth={5}>
            <div className="container">
              <div id="nameEntry">
                <TextField
                  className="textfield"
                  hintText="First Name"
                  onChange={this.props.handleFirstName}
                />
                <TextField
                  className="textfield"
                  hintText="Last Name"
                  onChange={this.props.handleLastName}
                />
              </div>
              <div id="emailEntry">
                <TextField
                  className="textfield"
                  hintText="Email Address"
                  onChange={this.props.handleEmail}
                />
                <TextField className="textfield" hintText="Create Password" />
              </div>
              <div id="submit">
                <RaisedButton
                  className="button"
                  label="Register"
                  primary={true}
                  onClick={this.setRedirect}
                />
              </div>
              <div id="login">
                <RaisedButton
                  className="button"
                  label="Login"
                  primary={true}
                  onClick={this.setRedirect}
                />
              </div>
            </div>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default RegisterForm;

RegisterForm.propTypes = {
  handleFirstName: PropTypes.func.isRequired,
  handleLastName: PropTypes.func.isRequired,
  handleEmail: PropTypes.func.isRequired
};
