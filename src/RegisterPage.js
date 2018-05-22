import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import LoginForm from 'grommet/components/LoginForm'
import { TitleBar } from 'react-desktop/windows'
import './styles/form.css'
import RegisterForm from './RegisterForm.js'

class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      isRegistered: false,
    }
  }

  handleChange(event, entry) {
    if (entry === 'firstname') {
      this.setState({ firstname: event.target.value })
    }
    if (entry === 'lastname') {
      this.setState({ lastname: event.target.value })
    }
    if (entry === 'email') {
      this.setState({ email: event.target.value })
    }
  }

  render() {
    return (
      <div id="welcomeWrapper">
        <LoginForm className="loginForm" title="myService" rememberMe={true} />
      </div>
    )
  }
}

export default RegisterPage

RegisterPage.propTypes = {
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}
