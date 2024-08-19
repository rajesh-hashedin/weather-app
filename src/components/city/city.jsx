import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import CityBanner from "../city-banner/city-banner";
import { BiCheck, BiPlus } from "react-icons/bi";
import { addCity, removeCity, setCity } from "../../redux/actions";
import { IoIosArrowBack } from "react-icons/io";
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
            style={{
              gap: 10,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => {
              setCity(null);
              browserHistory.push("/");
            }}
          >
            <IoIosArrowBack />
            <div style={{ color: "#0170FE", fontWeight: "bold" }}>Back</div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                backgroundColor: this.state.alreadyAdded ? "#009456" : "",
                color: this.state.alreadyAdded ? "white" : "",
                padding: this.state.alreadyAdded ? "10px" : "",
                borderRadius: this.state.alreadyAdded ? "5px" : "",
                fontWeight: "bold",
              }}
              onClick={() => {
                if (!this.state.alreadyAdded) {
                  addCity({
                    imageIcon: selectedCity.weather[0].icon,
                    name: selectedCity.name,
                    temp: selectedCity.main.temp,
                    pressure: selectedCity.main.pressure,
                    humidity: selectedCity.main.humidity,
                    dt: selectedCity.dt,
                    timezone: selectedCity.timezone,
                    sunrise: selectedCity.sys.sunrise,
                    sunset: selectedCity.sys.sunset,
                  });
                  this.setState({ alreadyAdded: true });
                }
              }}
            >
              <div>
                {this.state.alreadyAdded ? "Added to list" : "Add to list"}
              </div>

              {this.state.alreadyAdded ? (
                <BiCheck />
              ) : (
                <BiPlus
                  size={20}
                  style={{
                    padding: 1,
                    backgroundColor: "#DADADA",
                    borderRadius: 10,
                  }}
                />
              )}
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
              dt: selectedCity.dt,
              timezone: selectedCity.timezone,
              sunrise: selectedCity.sys.sunrise,
              sunset: selectedCity.sys.sunset,
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
