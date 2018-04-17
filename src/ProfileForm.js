import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'material-ui';
import Label from 'react-desktop/windows';
import {Field,  reduxForm} from 'redux-form';
import './styles/form.css';


let ProfileForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Age</label>
          <div>
            <Field
              name="age"                                
              component="input"
              type="text"
              placeholder="Enter Age"
            />
          </div>
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label>
              <Field
                name="sex"
                component="input"
                type="radio"
                value="male"
              />{' '}
              Male
            </label>
            <label>
              <Field
                name="sex"
                component="input"
                type="radio"
                value="female"
              />{' '}
              Female
            </label>
          </div>
        </div>
        <div>
          <label>Looking for</label>
          <div>
            <Field name="lookingFor" component="select">
              <option />
              <option value=""></option>
              <option value="Part-Time">Part-Time</option>
              <option value="Full-Time">Full-Time</option>
            </Field>
          </div>
        </div>
        <div>
          <label htmlFor="showAll">Show All Community Service Listings</label>
          <div>
            <Field
              name="showAll"
              id="showAll"
              component="input"
              type="checkbox"
            />
          </div>
        </div>
        <div>
          <label>Comments</label>
          <div>
            <Field name="comments" component="textarea" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    )
  }

 ProfileForm = reduxForm({
    form: 'ProfileForm'
  })(ProfileForm)

  export default ProfileForm



