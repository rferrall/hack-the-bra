import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import LoginPage from '../LoginPage/LoginPage'

import Profile from '../Views/Profile/Profile';
import Drawer from '../Views/Drawer/Drawer';
import Home from "../Views/Home/Home";
import Measure from "../Views/Measure/Measure";
import ProperFit from "../Views/ProperFit/ProperFit";


import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route
              exact
              path="/login"
              component={LoginPage}
            />
            <Route
              exact
              path="/profile"
              component={Profile}
            />
            <Route
              exact
              path="/measure"
              component={Measure}
            />
            <Route
                exact
                path="/drawer"
                component={Drawer}
            />
            <Route
                exact
                path="/properfit"
                component={ProperFit}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
