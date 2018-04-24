import { combineReducers } from 'redux'; 
import profileReducer from './profileFormReducer';

const communityServiceAppReducer =  combineReducers({
    profileForm: profileReducer
  });

  export default communityServiceAppReducer