import React from 'react';  
import {connect} from 'react-redux'
import { reduxForm } from 'redux-form';
import {search} from '../actions/listingActions'
import HomeForm from '../HomeForm';
import ProfileForm from '../ProfileForm';


const mapDispatchToProps = (dispatch) => {
    return {
        onCheck: (criteria, radius, location) => {
            dispatch(search(criteria, radius, location))
        }
      } 
    }
  

let HomeContainer = connect(null, mapDispatchToProps)(HomeForm)
export default HomeContainer

