import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


  export default function RouterExample() {
    return (
      <Router>
        <div>
          
            <ul>
              <li>
                <Link to="/home">Categories</Link>
              </li>
              <li>
                <Link to="/about">Home</Link>
              
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          <hr/>
            <Switch>
          <Route exact path="/home">
              <Categories/>
          </Route>

          <Route path="/about">
              <Homefun />
          </Route>

        </Switch>
      </div>

    </Router>
  );

    }