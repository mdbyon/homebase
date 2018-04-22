import React from 'react';  
import { reduxForm } from 'redux-form';

import ProfileForm from '../ProfileForm';

export const ProfileFormContainer = props => {  
  return (
    <ProfileForm />
  );
}

const formConfiguration = {  
  form: 'profileForm'
}

export default reduxForm(formConfiguration)(ProfileFormContainer);  