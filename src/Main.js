import { Switch, Route } from 'react-router-dom'
import React from 'react';
import WelcomePage from './WelcomePage';
import RegisterForm from './RegisterForm';
import HomePage from './HomePage';  

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/register' component={RegisterForm}/>
      <Route path='/home' component={HomePage}/>
    </Switch>
  </main>
)
export default Main