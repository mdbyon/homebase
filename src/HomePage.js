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
import HomeContainer from './containers/HomeContainer'
import { SideBar } from './SideBar'
import { Redirect } from 'react-router'
import { PieChart } from './PieChart'

import './styles/form.css'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      onHome: false,
    }
  }

  handleDrawerItemClick = (e, item) => {
    if (item === 'ShowPreferences') {
      this.props.requestPreferences()
    }
    if (item === 'Home') {
      this.setState({
        onHome: true,
      })
    }
    if (item === 'ShowListings') {
      this.props.requestListings()
    }
  }

  render() {
    var homeForm = this.state.onHome ? <HomeContainer /> : <div />

    var preferencesForm = this.props.requests.requestPreferences ? (
      <div>
        <Redirect to="/preferences" from="/listings" />
      </div>
    ) : (
      <div />
    )
    var redirect = this.props.requests.completedPreferences ? (
      <div />
    ) : (
      <div>
        <Redirect className="toPreferences" to="/preferences" />
      </div>
    )

    var pieChart =
      this.props.profile.points ? (
        <div>
          <PieChart profile={this.props.profile} />
        </div>
      ) : (
        <div />
      )

    var listingsTable = this.props.requests.requestListings ? (
      <Redirect to="/listings" />
    ) : (
      <div />
    )

    return (
      <div className="homeContainer">
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
                {pieChart}
                {redirect}
              </div>
            </Box>
          </Split>
        </App>
      </div>
    )
  }
}

export default HomePage

HomePage.propTypes = {
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}
