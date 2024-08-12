import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import { hashHistory, Route, Router } from "react-router";
import Home from "./components/home/home";

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          position: "relative",
        }}
      >
        <Navbar />
        <div
          style={{
            display: "flex",
            width: "60%",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Router history={hashHistory}>
            <Route path="/" component={Home} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
