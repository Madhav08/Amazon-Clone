import React, { useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Register from "./components/Register";
import { auth } from "./firebase";

function App() {

  // useEffect(() => {
  //   return () => {
  //     auth.onAuthStateChanged()
  //   }
  // }, [])

  return (
    <Router>
        <div className="app">
          
          <Switch>
          <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

          <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>

            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch> 
        </div>
    </Router>
  );
}

export default App;
