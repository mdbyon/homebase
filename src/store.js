import { createStore, applyMiddleware, compose } from 'redux'
import communityServiceAppReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers =
  typeof window === 'object' &&
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose)

export function configureStore() {
  const initialState = {
    profileForm: [
      {
        age: '11',
        sex: 'Male',
      },
      {
        age: '15',
        sex: 'Female',
      },
    ],
    listingsForm: [],
    requests: {},
    profile:{
      points: 50
    }
  }

  const store = createStore(
    communityServiceAppReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
  return store
}

export default configureStore
