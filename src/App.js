import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component.jsx';

const hatsPage = () => (
  <div>
    <h1>hats Page </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={hatsPage} />
      </Switch>
      

    </div>
  );
}

export default App;
