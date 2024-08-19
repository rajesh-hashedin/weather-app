import React, { Component } from "react";
import { browserHistory } from "react-router";
import { setCity } from "../../redux/actions";
import { connect } from "react-redux";
class Navbar extends Component {
  render() {
    const { setCity } = this.props;
    return (
      <div
        className="shadow"
        onClick={() => {
          setCity(null);
          browserHistory.push("/");
        }}
        style={{
          cursor: "pointer",
          padding: "1rem",
          fontWeight: "bold",
          fontSize: "20px",
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>Weather Forecaster</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
