import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sidebar from 'grommet/components/Sidebar'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import App from 'grommet/components/App'
import Split from 'grommet/components/Split'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import User from 'grommet/components/icons/base/User'
import ProfileFormContainer from './containers/ProfileFormContainer'
import PersonsTableContainer from './containers/PersonsTableContainer'
import ListingsContainer from './containers/ListingsContainer'
import HomeContainer from './containers/HomeContainer'

import './styles/form.css'


class HomePage extends Component {
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
    }
  }

  handleDrawerItemClick = (e, item) => {
    if (item === 'MyCommunityService') {
      this.setState({
        onServiceHistory: true,
        showProfileForm: false,
        onHome: false,
        showListings: false,
      })
    }
    if (item === 'Home') {
      this.setState({
        onHome: true,
        showListings: false,
        onServiceHistory: false,
        showProfileForm: false,
      })
    }
    if (item === 'ShowListings') {
      this.setState({
        showListings: true,
        onHome: false,
        onServiceHistory: false,
        showProfileForm: false,
      })
    }
  }

  render() {

    var homeForm = this.state.onHome ? (
        <HomeContainer />
    ) : (
      <div />
    )

    var listingsTable = this.state.showListings || this.props.showListings ? (
        <ListingsContainer />
    ) : (
      <div />
    )

    return (
      <div>
        <App centered = {false}>
          <Split flex = 'right' priority = 'right'>
          <Box size = 'medium'>
            <Sidebar className="sidebar" colorIndex="neutral-1" fixed={true}>
              <Menu primary={true}>
                <Anchor onClick={e => this.handleDrawerItemClick(e, 'Home')}>
                  Home
                </Anchor>
                <Anchor
                  onClick={e => this.handleDrawerItemClick(e, 'ShowListings')}
                >
                  Show Listings
                </Anchor>
              </Menu>
          <Footer pad="medium">
            <Button icon={<User />} />
          </Footer>
        </Sidebar>
        </Box>
        <Box>
          <div>
            {listingsTable}
            {homeForm}
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
