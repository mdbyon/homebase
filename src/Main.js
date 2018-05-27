import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import HomePage from './HomePage'
import { Provider } from 'react-redux'
import ListingsContainer from './containers/ListingsContainer'
import PreferencesPage from './PreferencesPage'
import configureStore from './store'
import ListingsPage from './ListingsPage'
import PreferencesPageContainer from './containers/pages/PreferencesPageContainer';
import PreferencesContainer from './containers/PreferencesContainer'
import ListingsPageContainer from './containers/pages/ListingsPageContainer';
import HomePageContainer from './containers/pages/HomePageContainer';

const store = configureStore()

const Main = () => (
  <main>
    <Switch>
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={RegisterPage} />
            <Route path="/home" component={HomePageContainer} />
            <Route path="/listings" component={ListingsPageContainer} />
            <Route path = "/preferences" component ={PreferencesPageContainer} />
          </div>
        </Router>
      </Provider>
    </Switch>
  </main>
)
export default Main
