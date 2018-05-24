import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import HomePage from './HomePage'
import ProfileFormContainer from './containers/ProfileFormContainer'
import {Provider} from 'react-redux';
import ListingsContainer from './containers/ListingsContainer'
import configureStore from './store'


const store = configureStore();


const Main = () => (
  <main>
    <Switch>
      <Provider store = {store}>
        <Router>
          <div>
            <Route exact path="/" component={RegisterPage} />
            <Route path="/home" component={HomePage} />
            <Route path ="/listings" component = {ListingsContainer} />
          </div>
        </Router>
      </Provider>
    </Switch>
  </main>
)
export default Main
