import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import CityBanner from "../city-banner/city-banner";
import { BiCheck, BiPlus } from "react-icons/bi";
import { addCity, removeCity, setCity } from "../../redux/actions";

class City extends Component {
  constructor() {
    super();
    this.state = {
      alreadySent: false,
    };
  }
  componentDidMount() {
    if (
      this.props.weather.cities.find(
        (city) => city.name === this.props.weather.selectedCity.name
      )
    ) {
      this.setState({ alreadyAdded: true });
    }
  }
  render() {
    const { selectedCity } = this.props.weather;
    const { removeCity, addCity, setCity } = this.props;
    console.log(selectedCity);
    return (
      <div
        style={{
          width: "60%",
          margin: "auto",
          display: "flex",
          padding: 30,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCity(null);
              browserHistory.push("/");
            }}
          >
            Back
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                cursor: "pointer",
                backgroundColor: this.state.alreadyAdded ? "#009456" : "",
                color: this.state.alreadyAdded ? "white" : "",
                padding: this.state.alreadyAdded ? "10px" : "",
                borderRadius: this.state.alreadyAdded ? "5px" : "",
              }}
              onClick={() => {
                if (!this.state.alreadyAdded) {
                  addCity({
                    imageIcon: selectedCity.weather[0].icon,
                    name: selectedCity.name,
                    temp: selectedCity.main.temp,
                  });
                  this.setState({ alreadyAdded: true });
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
                  removeCity(selectedCity.name);
                  this.setState({ alreadyAdded: false });
                }}
              >
                Remove
              </div>
            )}
          </div>
        </div>
        <div>
          <CityBanner
            removeBtn={false}
            city={{
              imageIcon: selectedCity.weather[0].icon,
              name: selectedCity.name,
              temp: selectedCity.main.temp,
              pressure: selectedCity.main.pressure,
              humidity: selectedCity.main.humidity,
            }}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  weather: state.weather,
});

const mapDispatchToProps = {
  removeCity,
  addCity,
  setCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
