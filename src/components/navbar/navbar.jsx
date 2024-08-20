import React, { Component } from "react";
import { browserHistory } from "react-router";
import { setCity } from "../../redux/actions";
import { connect } from "react-redux";
import "./navbar.scss";
class Navbar extends Component {
  render() {
    const { setCity } = this.props;
    return (
      <div
        className="shadow navbar_container"
        onClick={() => {
          setCity(null);
          browserHistory.push("/");
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
