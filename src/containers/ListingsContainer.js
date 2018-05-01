import React from 'react';  
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux'
import search from '../actions/listingActions'
import ListingsTable from '../ListingsTable';

function mapStateToProps(state) {
    return {
        listings: state.listingForm
    }
  }

let ListingsContainer = connect(mapStateToProps, null)(ListingsTable)
export default ListingsContainer
