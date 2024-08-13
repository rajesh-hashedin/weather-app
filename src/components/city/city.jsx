import React, { Component } from "react";
import CityBanner from "../city-banner/city-banner";
import { BiArrowToLeft, BiCheck, BiPlus } from "react-icons/bi";
import { Link } from "react-router";
import { connect } from "react-redux";
import { getWeather } from "../../services/common";
import { addCity, removeCity } from "../../redux/actions";

class City extends Component {
  constructor() {
    super();
    this.state = {
      city: {
        imageIcon: "10d",
        name: "",
        temp: "",
        time: "",
        pressure: "",
        rain: "",
        humidity: "",
        lengthOfDay: "",
        remainingDaylight: "",
        timezone: 0,
      },
      alreadyAdded: false,
    };
  }
  componentDidMount() {
    if (this.props.params.city) {
      if (
        this.props.weather.cities.find(
          (city) => city.name === this.props.params.city
        )
      ) {
        this.setState({ ...this.state, alreadyAdded: true });
      }
      getWeather(this.props.params.city).then((response) => {
        if (response) {
          this.setState({
            ...this.state,
            city: {
              imageIcon: response.weather[0].icon,
              name: response.name,
              temp: response.main.temp,
              time: response.dt,
              pressure: response.main.pressure,
              rain: "58%",
              humidity: response.main.humidity,
              sunrise: response.sys.sunrise,
              sunset: response.sys.sunset,
              timezone: response.timezone,
            },
          });
        }
      });
    }
  }
  render() {
    const { addCity, weather, removeCity } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            to="/"
            style={{ color: "#0170FE", display: "flex", cursor: "pointer" }}
          >
            <BiArrowToLeft />
            Back
          </Link>
          <div style={{ display: "flex" }}>
            {" "}
            <div
              style={{
                cursor: "pointer",
                ...(this.state.alreadyAdded
                  ? {
                      backgroundColor: "#009456",
                      color: "white",
                      padding: "10px",
                      borderRadius: "5px",
                    }
                  : {}),
              }}
              onClick={() => {
                if (!this.state.alreadyAdded) {
                  addCity(this.state.city);
                  this.setState({ ...this.state, alreadyAdded: true });
                }
              }}
            >
              {this.state.alreadyAdded ? "Added to list" : "Add to list"}
              {this.state.alreadyAdded ? <BiCheck /> : <BiPlus />}
            </div>
            {this.state.alreadyAdded && (
              <div
                style={{
                  cursor: "pointer",
                  backgroundColor: "#EC7272",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
                onClick={() => {
                  console.log(this.state.city.name);
                  removeCity(this.state.city.name);
                  this.setState({ ...this.state, alreadyAdded: false });
                }}
              >
                Remove
              </div>
            )}
          </div>
        </div>
        <CityBanner city={this.state.city} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  weather: state.weather,
});
const mapDispatchToProps = {
  addCity,
  removeCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
