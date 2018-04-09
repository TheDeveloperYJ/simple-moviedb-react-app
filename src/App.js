import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import MoviesList from './MoviesList';
import PropTypes from 'prop-types'
import MovieDetail from './MovieDetail'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';


const App = () => {
return (
      <Router>
      <div className="App">
        <header className="App-header">
        <Link to="/">
         <img src={logo} className="App-logo" alt="logo" />
         </Link>
        </header>
        <Switch>
        <Route   component={MovieDetail} path='/:id'/>
        <Route  component={MoviesList} exact path='/'/>
        </Switch> 
      </div>
      </Router>
    );
}


export default App;
