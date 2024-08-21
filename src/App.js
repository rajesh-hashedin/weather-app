import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import { browserHistory, Route, Router } from "react-router";
import Home from "./components/home/home";
import City from "./components/city/city";

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar_container">
          <Navbar />
        </div>
        <div>
          <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/city" component={City} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
