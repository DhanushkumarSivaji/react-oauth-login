import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import PrivateRoute from './components/routing/privateRoute';
import State from './store/state';
import './App.css';

function App() {
  return (
    <State>
    <Router>
      <Switch>
          <Route exact path="/login" component={props => <Login {...props} />} />
          <PrivateRoute exact path="/" component={props => <Home {...props} />} />
      </Switch>
    </Router>
    </State>
  );
}

export default App;
