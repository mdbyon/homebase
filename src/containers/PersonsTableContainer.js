import React from 'react';  
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux'
import profileActions from '../actions/profileActions'
import ProfileForm from '../ProfileForm';
import  PersonsTable  from '../PersonsTable';

function mapStateToProps(state) {
    return {
        users: state.profileForm.users
    }
  }
  

let PersonsTableContainer = connect(mapStateToProps, null)(PersonsTable)
export default PersonsTableContainer
