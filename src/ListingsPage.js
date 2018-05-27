import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from 'grommet/components/App'
import Split from 'grommet/components/Split'
import Box from 'grommet/components/Box'
import { SideBar } from './SideBar'
import HomeContainer from './containers/HomeContainer'
import ListingsContainer from './containers/ListingsContainer'
import { Redirect } from 'react-router'

import './styles/form.css'

class ListingsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      showListings: true,
    }
  }

  handleDrawerItemClick = (e, item) => {
    if (item === 'Home') {
      this.props.requestHome()
    }
    if (item === 'ShowListings') {
      this.setState({ showListings: true })
    }
    if (item == 'ShowPreferences') {
      this.props.requestPreferences()
    }
  }

  render() {
    var homeForm = this.props.requests.requestHome ? (
      <Redirect to="/home" />
    ) : (
      <div />
    )

    var preferencesForm = this.props.requests.requestPreferences ? (
      <div>
        <Redirect to="/preferences" from="/listings" />
      </div>
    ) : (
      <div />
    )

    var listingsTable =
      this.props.requests.requestListings || this.props.requests.redirect ? (
        <ListingsContainer />
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
                {preferencesForm}
                {homeForm}
              </div>
            </Box>
          </Split>
        </App>
      </div>
    )
  }
}

export default ListingsPage
