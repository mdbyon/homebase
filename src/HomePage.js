import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import './styles/form.css';


class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
        open: true
    };
  }
  

  render() {
    return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <Drawer open={this.state.open}>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
        </Drawer>
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


