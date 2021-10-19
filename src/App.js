import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import Slider from './Slider/Slider';



function App() {
  return (
    <Router>
       <div className="app">
        <Switch>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
          </Route>
          <Route path="/">
            <Header />
            <Slider />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
     
  );
}

export default App;
