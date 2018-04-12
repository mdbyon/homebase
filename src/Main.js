import { Switch, Route } from 'react-router-dom'
import React from 'react';
import WelcomeForm from './WelcomeForm';
import RegisterForm from './RegisterForm';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={WelcomeForm}/>
      <Route path='/register' component={RegisterForm}/>
    </Switch>
  </main>
)
export default Main