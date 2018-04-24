import React from 'react';  
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux'
import profileActions from '../actions/profileActions'
import ProfileForm from '../ProfileForm';
import UserList from '../UserList';

function mapStateToProps(state) {
    return {
        users: state.users
    }
  }
  

let UserListContainer = connect(mapStateToProps, null)(UserList)
export default UserListContainer
