import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Dash from './Pages/Dash/Dash'
import Edit from './Pages/Edit/Edit'
import Nav from './Nav'
import './Styles/App.css';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Dash} /> 
        <Route path="/edit" exact component={Edit} />
      </Switch>
    </Router>
  )}

export default App;