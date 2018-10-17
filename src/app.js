'use strict';

import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1> TODO List</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li> <Link to="/dashboard">Dashboard</Link> </li>

            </ul>
          </nav>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
