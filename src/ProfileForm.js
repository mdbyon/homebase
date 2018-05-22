import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'material-ui'
import Checkbox from 'material-ui/Checkbox'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import SelectField from 'material-ui/SelectField'
import Label from 'react-desktop/windows'
import RaisedButton from 'material-ui/RaisedButton'
import './styles/form.css'

class ProfileForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: '',
      sex: '',
      lookingFor: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ age: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <div>
        <Form className="testForm">
          <FormField label="Sample label">
            <TextInput />
          </FormField>
        </Form>
      </div>
    )
  }
}

export default ProfileForm
