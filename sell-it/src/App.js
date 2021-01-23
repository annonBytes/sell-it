import React from 'react'
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
        <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route> 

        </Switch>
      </div>
    </Router>
  );
}

export default App;