import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from 'grommet/components/App'
import Split from 'grommet/components/Split'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import User from 'grommet/components/icons/base/User'
import ListingsContainer from './containers/ListingsContainer'
import PreferencesContainer from './containers/PreferencesContainer'
import { SideBar } from './SideBar'
import { Redirect } from 'react-router'

import './styles/form.css'

class PreferencesPage extends Component {
  static defaultProps = {
    color: '#1A237E',
    theme: 'dark',
  }

  constructor(props) {
    super(props)
    this.state = {
      open: true,
      onHome: false,
      onSettings: false,
      onServiceHistory: false,
      showProfileForm: false,
      showListings: false,
      showPreferences: true,
    }
  }

  handleDrawerItemClick = (e, item) => {
    if (item === 'Home') {
      this.props.requestHome()
    }
    if (item == 'ShowListings') {
      this.props.requestListings()
    }
    if (item == 'ShowPreferences') {
      this.setState({ showPreferences: true })
    }
  }

  render() {
    var homeForm = this.props.requests.completed ? (
      this.props.requests.requestHome ? (
        <Redirect to="/home" />
      ) : (
        <div />
      )
    ) : (
      <div />
    )

    var preferencesForm = this.state.showPreferences ? (
      <PreferencesContainer />
    ) : (
      <div />
    )

    var listingsTable = this.props.requests.requestListings ? (
      <div>
        <Redirect to="/listings" />
      </div>
    ) : (
      <div />
    )

    return (
      <div>
        <App centered={false}>
          <Split flex="right" priority="right">
            <SideBar
              handleHome={e => this.handleDrawerItemClick(e, 'Home')}
              handleListings={e =>
                this.handleDrawerItemClick(e, 'ShowListings')
              }
              handlePreferences={e =>
                this.handleDrawerItemClick(e, 'ShowPreferences')
              }
            />
            <Box>
              <div>
                {listingsTable}
                {homeForm}
                {preferencesForm}
              </div>
            </Box>
          </Split>
        </App>
      </div>
    )
  }
}

export default PreferencesPage
