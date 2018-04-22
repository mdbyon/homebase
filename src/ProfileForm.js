import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'material-ui';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import Label from 'react-desktop/windows';
import RaisedButton from 'material-ui/RaisedButton';
import './styles/form.css';

const ProfileForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div className = 'formEntry'>
          <label>Age</label>
          <div className = 'fieldEntry'>
            <TextField
              className="age"                                
              placeholder="Enter Age"
            />
          </div>
        </div>
        <div className = 'formEntry'>
          <label>Sex</label>
          <div className = 'fieldEntry'>
            <RadioButtonGroup >
                <RadioButton className = 'radioButton' value="male" label="Male"/>
                <RadioButton className = 'radioButton' value="female" label="Female"/>
            </RadioButtonGroup>
            </div>
        </div>
        <div className = 'formEntry'>
          <label>Looking for</label>
          <div className = 'fieldEntry'>
            <SelectField>
              <option value=""></option>
              <option value="Part-Time">Part-Time</option>
              <option value="Full-Time">Full-Time</option>
            </SelectField>
          </div>
        </div>
        <div className = 'formEntry'>
          <label htmlFor="showAll">Show All Community Service Listings</label>
          <div className = 'fieldEntry'>
            <Checkbox
              className = 'checkBox'
              name="showAll"
            />
          </div>
        </div>
        <div className = 'formEntry'>
          <label>Comments</label>
          <div className = 'fieldEntry'>
            <TextField className = 'comments' 
             label="Notes" multiLine={true} rows={2}
             placeholder="What makes you interested in community service?"/>
          </div>
        </div>
        <div>
        <RaisedButton className = 'profileButton' label="Submit" primary={true} />
        </div>
      </form>
    )
  }

  export default ProfileForm



