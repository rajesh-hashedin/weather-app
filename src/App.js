import React, { Component } from "react";
import { decrement, increment } from "./redux/actions";
import { connect } from "react-redux";
import Navbar from "./components/navbar";
import { hashHistory, Route, Router } from "react-router";
import Home from "./components/home";
import About from "./components/about";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router history={hashHistory}>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route />
        </Router>
      </div>
    );
  }
}

export default App;
