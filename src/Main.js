import { Switch, Route } from 'react-router-dom'
import React from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';  

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={RegisterPage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/home' component={HomePage}/>
    </Switch>
  </main>
)
export default Main