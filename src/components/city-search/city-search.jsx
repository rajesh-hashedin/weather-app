import React, { Component } from "react";
import { connect } from "react-redux";
import CityCard from "../city-card/city-card";
import { setCity } from "../../redux/actions";
import { browserHistory } from "react-router";
import { getWeather } from "../../services/common";

class CitySearch extends Component {
  render() {
    const { searchHistory, selectedCity } = this.props.weather;
    const { setCity } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          paddingTop: 20,
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          {searchHistory.map((city) => (
            <div
              className="border card"
              onClick={() => {
                getWeather(city).then((response) => {
                  setCity(response.data);
                  browserHistory.push("/city");
                });
              }}
              style={{
                cursor: "pointer",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "5px",
                paddingBottom: "5px",
                borderRadius: 50,
              }}
              key={city}
            >
              {city}
            </div>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          {selectedCity && <CityCard city={selectedCity} />}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  weather: state.weather,
});

const mapDispatchToProps = {
  setCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);
