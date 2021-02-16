import React, { useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe
('pk_test_51ILY6ACb17RVzvHjhcM1Xle8jRkTZGMNJukNX2IO8ecj3NtnDOGZf0OoH5Izi1rG60GvZczDe6CxaShehi8DlwH8009jujeBAG');

function App() {
 
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <Router>
      <div className="App">
     
        <Switch>
        <Route path="/login">
           <Login />
        </Route>

        <Route path="/checkout">
            <Header />
            <Checkout />
        </Route>

        <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
                <Payment />
            </Elements>
           
        </Route>

          <Route path="/" exact>
           <Header />
            <Home />
          </Route> 

        </Switch>
      </div>
    </Router>
  );
}

export default App;
