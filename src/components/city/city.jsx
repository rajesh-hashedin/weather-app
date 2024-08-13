import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

class City extends Component {
  constructor() {
    super();
    this.state = {
      city: null,
    };
  }
  componentDidMount() {
    if (this.props.weather.selectedCity) {
      this.setState({ city: { name: this.props.weather.selectedCity.name } });
    }
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            browserHistory.push("/");
          }}
        >
          goto home
        </button>
        <div>{this.state.city && this.state.city.name}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  weather: state.weather,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(City);
