import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Form from 'grommet/components/Form'
import FormFields from 'grommet/components/FormFields'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import Header from 'grommet/components/Header'
import Button from 'grommet/components/Button'
import Footer from 'grommet/components/Footer'
import Heading from 'grommet/components/Heading'
import CheckBox from 'grommet/components/CheckBox'
import Spinning from 'grommet/components/icons/Spinning'
import { Redirect } from 'react-router'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import { milesToMeters } from './utilities/milesToMeters'

import './styles/form.css'

const sliderStyle = { width: 400, margin: 35 }
const marks = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: '11',
  12: '12',
  13: '13',
  14: '14',
  15: '15',
  16: '16',
  17: '17',
  18: '18',
  19: '19',
  20: '20',
}

class PreferencesForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      radius: '16093.44',
      hospital: false,
      school: false,
      churches: false,
      libraries: false,
      isLoading: false,
    }
    this.handleCheckBox = this.handleCheckBox.bind(this)
  }

  handleChange = e => {
    this.setState({ location: e.target.value })
  }

  handleRadius = e => {
    let meterVal
    console.log(e)
    meterVal = milesToMeters(e)
    this.setState({ radius: meterVal })
  }

  handleCheckBox = (e, value) => {
    if (value == 'hospital') {
      this.setState({ hospital: !this.state.hospitals })
    }
    if (value == 'school') {
      this.setState({ school: !this.state.schools })
    }
  }

  handleSubmit = (e, checkedValues) => {
    e.preventDefault()
    Object.keys(checkedValues).map(value => {
      console.log(value)
      if (checkedValues[value] == true) {
        this.props.onCheck(value, this.state.radius, this.state.location)
      }
    })
  }

  render() {
    return (
      <div id="homeContainer">
        <Form
          className="homeForm"
          onSubmit={e => this.handleSubmit(e, this.state)}
        >
          <Header>
            <Heading>Find Volunteering Opportunities</Heading>
          </Header>
          <FormFields>
            <FormField label="What city would you like to volunteer in?">
              <TextInput onDOMChange={this.handleChange} />
            </FormField>

            <FormField label="Enter Search Radius (miles)">
              <div style={sliderStyle}>
                <Slider
                  min={0}
                  max={20}
                  defaultValue={10}
                  marks={marks}
                  onAfterChange={this.handleRadius}
                />
              </div>
            </FormField>

            <FormField label="What categories interests you?">
              <CheckBox
                label="Hospitals"
                onChange={e => this.handleCheckBox(e, 'hospital')}
              />
              <CheckBox
                label="Schools"
                onChange={e => this.handleCheckBox(e, 'school')}
              />
              <CheckBox
                label="Churches"
                onChange={e => this.handleCheckBox(e, 'church')}
              />
              <CheckBox
                label="Libraries"
                onChange={e => this.handleCheckBox(e, 'library')}
              />
            </FormField>
          </FormFields>
          <Footer pad={{ vertical: 'medium' }}>
            <Button label="Submit" type="submit" primary={true} />
          </Footer>
        </Form>
        {this.props.requests.visited ? (<div /> ) : (
            this.props.requests.makeRequest ? (
            this.props.requests.didLoad ? (
                <div>   
                        <Redirect to="/listings"
                        />
                        {this.props.requestRedirect()}
                </div>
            ) : (
                <Spinning className="spinner" size="large" />
            )
        ) : (
          <div />
        )
        )}
    
      </div>
    )
  }
}

export default PreferencesForm
