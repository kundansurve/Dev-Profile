import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home/home'
import add_developer from './login/adddevelopers'
import Profile from './profile/profile'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './index.css';
//import './App.css';
//import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <Router>
  <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/adddeveloper" exact component={add_developer} />
      <Route path="/developers/:developerid" exact component={Profile} />
   </Switch>   
  </Router>,
    document.getElementById('root')
  );