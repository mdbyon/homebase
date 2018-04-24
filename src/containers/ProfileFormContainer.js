import React from 'react';  
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux'
import profileActions from '../actions/profileActions'
import ProfileForm from '../ProfileForm';


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) => {
            dispatch(profileActions.addUser(text))
        }
      }
    }


let ProfileFormContainer = connect(null, mapDispatchToProps)(ProfileForm)
export default ProfileFormContainer
