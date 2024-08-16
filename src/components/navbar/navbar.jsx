import React, { Component } from "react";
import { browserHistory } from "react-router";
import { setCity } from "../../redux/actions";
import { connect } from "react-redux";
class Navbar extends Component {
  render() {
    const { setCity } = this.props;
    return (
      <div
        onClick={() => {
          setCity(null);
          browserHistory.push("/");
        }}
        style={{
          cursor: "pointer",
          padding: "1rem",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Weather Forecaster
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
