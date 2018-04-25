import React from 'react';  
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux'
import profileActions from '../actions/profileActions'
import ProfileForm from '../ProfileForm';


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (user) => {
            dispatch(profileActions.addUser(user))
        }
      }
    }


let ProfileFormContainer = connect(null, mapDispatchToProps)(ProfileForm)
export default ProfileFormContainer
