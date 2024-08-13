import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import { browserHistory, Route, Router } from "react-router";
import Home from "./components/home/home";
import City from "./components/city/city";

class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "#B2EBF2",
            position: "sticky",
            top: 0,
            left: 0,
          }}
        >
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
