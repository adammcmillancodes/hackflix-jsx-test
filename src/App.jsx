import React, {Component} from 'react';
import './App.css';
import Catalogue from './Catalogue.js'
import MovieDetails from './MovieDetails.js'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';


class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <header className="top-header">
            <h1 tabIndex="1">🖕HackFlix, Asshole🖕</h1>
            <nav tabIndex="1">
              <p>Catalogue</p>
            </nav>
          </header>

          <Route exact path="/" component={Catalogue}/>
          <Route path="/movies/:movieId" component={MovieDetails} />

        </div>
      </Router>
    );

  }
}

export default App;
