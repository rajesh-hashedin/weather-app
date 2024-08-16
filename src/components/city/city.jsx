import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

class City extends Component {
  render() {
    console.log(this.props.weather);
    return <div></div>;
  }
}
const mapStateToProps = (state) => ({
  weather: state.weather,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(City);
