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

class HomeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <div id="homeContainer">
      
      </div>
    )
  }
}

export default HomeForm
