import React from 'react';
import Details from './pages/details';
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './index.css';

function App() {
  return (

    <Router >
      <Switch>
        <Route path="/details">
            <Details></Details>
        </Route>
        <Route path="/">
            <Home></Home>
        </Route>
      </Switch>  
    </Router>
    
  );
}

export default App;
