import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navb from "./components/Nav/index.js"
import NoMatch from "./pages/NoMatch.js"

class App extends Component {
  render() {
    return (
      <Router>
        <Navb/>
        <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/about" component={About}/>
        <Route exact path ="/contact" component={Contact}/>
        <Route component={NoMatch}/>
        </Switch>
      </Router>
    )
}}

export default App;
