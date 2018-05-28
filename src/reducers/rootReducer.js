import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import listingsReducer from './listingsReducer'
import requestsReducer from './requestsReducer'

const communityServiceAppReducer = combineReducers({
  profile: profileReducer,
  listingsForm: listingsReducer,
  requests: requestsReducer,
})

export default communityServiceAppReducer
