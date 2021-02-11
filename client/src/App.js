import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Navb from "./components/Nav/index.js"

class App extends Component {
  render() {
    return (
      <Router>
        <Navb/>
        <Switch>
        <Route exact path ="/"/>
        <Route exact path ="/home" component={Home}/>
        <Route exact path ="/"/>
        <Route exact path ="/"/>
        <Route exact path ="/"/>
        </Switch>
      </Router>
    )
}}

export default App;
