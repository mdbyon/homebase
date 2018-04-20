import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'material-ui';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import Label from 'react-desktop/windows';
import {Field,  reduxForm} from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import './styles/form.css';

const TextArea = 
<TextField 
    hintText="Insert Comments"
    multiLine={true}
    rows={2}
    rowsMax={5}/>

let ProfileForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div className = 'formEntry'>
          <label>Age</label>
          <div className = 'fieldEntry'>
            <Field
              name="age"                                
              component={TextField}
              type="text"
              placeholder="Enter Age"
            />
          </div>
        </div>
        <div className = 'formEntry'>
          <label>Sex</label>
          <div className = 'fieldEntry'>
            <Field name="sex" component={RadioButtonGroup}>
                <RadioButton className = 'radioButton' value="male" label="Male"/>
                <RadioButton className = 'radioButton' value="female" label="Female"/>
            </Field>
          </div>
        </div>
        <div className = 'formEntry'>
          <label>Looking for</label>
          <div className = 'fieldEntry'>
            <Field name="lookingFor" component={SelectField}>
              <option value=""></option>
              <option value="Part-Time">Part-Time</option>
              <option value="Full-Time">Full-Time</option>
            </Field>
          </div>
        </div>
        <div className = 'formEntry'>
          <label htmlFor="showAll">Show All Community Service Listings</label>
          <div className = 'fieldEntry'>
            <Field
              className = 'checkBox'
              name="showAll"
              id="showAll"
              component={Checkbox}
              type="checkbox"
            />
          </div>
        </div>
        <div className = 'formEntry'>
          <label>Comments</label>
          <div className = 'fieldEntry'>
            <Field className = 'comments' name="comments" component={TextField} label="Notes" multiLine={true} rows={2}/>
          </div>
        </div>
        <div>
        <RaisedButton className = 'profileButton' label="Submit" primary={true} />
        </div>
      </form>
    )
  }

 ProfileForm = reduxForm({
    profileForm: 'ProfileForm'
  })(ProfileForm)

  export default ProfileForm



