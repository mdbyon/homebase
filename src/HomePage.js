import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import configureStore from './store'; 
import ProfileFormContainer from './containers/ProfileFormContainer';
import PersonsTableContainer from './containers/PersonsTableContainer';
import ListingsContainer from './containers/ListingsContainer'; 
import HomeContainer from './containers/HomeContainer';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { Provider } from 'react-redux';

import './styles/form.css';

const store = configureStore();

class HomePage extends Component {
  static defaultProps = {
    color: '#1A237E',
    theme: 'dark'
  };

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      onHome: false,
      onSettings: false,
      onServiceHistory: false,
      showProfileForm: false,
      showListings:false,
    };
  }

  handleDrawerItemClick = (e, item) => {
    if (item === 'MyCommunityService') {
      this.setState({
        onServiceHistory: true,
        showProfileForm: false,
        onHome: false,
        showListings:false
      });
    }
    if (item === 'Profile') {
      this.setState({
        onServiceHistory: false,
        showProfileForm: true,
        onHome:false,
        showListings: false
      });
    }
    if (item === 'Settings') {
      this.setState({ 
        onServiceHistory: false,
        showProfileForm: false,
        onHome:false,
        showListings: false
       });
    }
    if(item === 'Home') {
      this.setState({
        onHome:true,
        showListings:false,
        onServiceHistory: false,
        showProfileForm: false
      })
    }
    if(item === 'ShowListings') {
      this.setState({
        showListings:true,
        onHome:false,
        onServiceHistory: false,
        showProfileForm: false
      })
    }
  };

  render() {
    var table = this.state.onServiceHistory ? (
      <Provider store={store}>
        <PersonsTableContainer />
      </Provider>
    ) : (
      <div />
    );

    var profileForm = this.state.showProfileForm ? (
      <Provider store={store}>
        <ProfileFormContainer />
      </Provider>
    ) : (
      <div />
    );

    var homeForm = this.state.onHome ? (
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    ) : (
      <div />
    );

    var listingsTable = this.state.showListings ? (
      <Provider store={store}>
        <ListingsContainer />
      </Provider>
    ) : (
      <div />
    );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <Drawer open={this.state.open}>
            <MenuItem onClick={e => this.handleDrawerItemClick(e, 'Home')}>
              Home
            </MenuItem>
            <MenuItem onClick={e => this.handleDrawerItemClick(e, 'Profile')}>
              Profile
            </MenuItem>
            <MenuItem
              onClick={e => this.handleDrawerItemClick(e, 'MyCommunityService')}
            >
              MyCommunityService
            </MenuItem>
            <MenuItem onClick={e => this.handleDrawerItemClick(e, 'Settings')}>
              Settings
            </MenuItem>
            <MenuItem onClick={e => this.handleDrawerItemClick(e, 'ShowListings')}>
              Show Listings
            </MenuItem>
          </Drawer>
          <Paper id="homePaper">
          <div id = 'tableDisplay'>
            {listingsTable}
            {table}
          </div>
          <div id = "display">
            {homeForm}
            {profileForm}
          </div>

          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default HomePage;

HomePage.propTypes = {
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
};
