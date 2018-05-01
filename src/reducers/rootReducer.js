import { combineReducers } from 'redux'; 
import profileReducer from './profileFormReducer';
import listingsReducer from './listingsReducer';

const communityServiceAppReducer =  combineReducers({
    profileForm: profileReducer,
    listingsForm: listingsReducer
  });

  export default communityServiceAppReducer