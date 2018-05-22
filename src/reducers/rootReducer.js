import { combineReducers } from 'redux'
import profileReducer from './profileFormReducer'
import listingsReducer from './listingsReducer'
import requestsReducer from './requestsReducer'

const communityServiceAppReducer = combineReducers({
  profileForm: profileReducer,
  listingsForm: listingsReducer,
  requests: requestsReducer,
})

export default communityServiceAppReducer
