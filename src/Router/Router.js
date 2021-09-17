import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from '../components/UI/Login';
import { ListAcount } from '../components/ListAcount';
import { NavbarApp } from '../components/UI/NavbarApp';
import { AcountForm } from '../components/AcountForm';

export const RouterApp = (props) => {
  return (
    <Router>
      <div className="App">
        <NavbarApp />

        <div className="auth-wrapper">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/list-acounts" component={ListAcount} />
            <Route path="/acount/:data" component={AcountForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
