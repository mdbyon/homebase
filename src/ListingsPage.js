import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from 'grommet/components/App'
import Split from 'grommet/components/Split'
import Box from 'grommet/components/Box'
import {SideBar} from './SideBar'
import HomeContainer from './containers/HomeContainer'
import ListingsContainer from './containers/ListingsContainer'
import {Redirect} from 'react-router'

import './styles/form.css'


class ListingsPage extends Component {


  constructor(props) {
    super(props)
    this.state = {
      open: true,
      onHome: false,
      onSettings: false,
      onServiceHistory: false,
      showProfileForm: false,
      showListings: true,
    }
  }

  handleDrawerItemClick = (e, item) => {
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
        <Redirect to = '/home' />
    ) : (
      <div />
    )

    var listingsTable = this.state.showListings ? (
        <ListingsContainer />
    ) : (
      <div />
    )

    return (
      <div>
        <App centered = {false}>
          <Split flex = 'right' priority = 'right'>
            <SideBar handleHome = {(e) => this.handleDrawerItemClick(e,'Home')}
              handleListings = {(e) => this.handleDrawerItemClick(e, 'ShowListings')}/>
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

export default ListingsPage

