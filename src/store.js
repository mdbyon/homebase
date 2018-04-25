import { createStore, applyMiddleware, compose } from 'redux';  
import communityServiceAppReducer from './reducers/rootReducer';

const composeEnhancers =  
  typeof window === 'object' &&
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose);

export function configureStore() {  
  const middlewares = [];
  const initialState =  {     
    profileForm: [    
      {
        age: "11", 
        sex: "Male"
      },
      {
        age: "15",
        sex: "Female"
      }
    ]
  }

  const store = createStore(
    communityServiceAppReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}

export default configureStore;  