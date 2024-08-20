import React, { Component } from "react";
import { connect } from "react-redux";
import CityCard from "../city-card/city-card";
import { setCity } from "../../redux/actions";
import { browserHistory } from "react-router";
import { getWeather } from "../../services/common";
import "./city-search.scss";

class CitySearch extends Component {
  render() {
    const { searchHistory, selectedCity } = this.props.weather;
    const { setCity } = this.props;
    return (
      <div className="city_search_container">
        <div style={{ display: "flex", gap: 10 }}>
          {searchHistory.map((city) => (
            <div
              className="border card city_search_item"
              onClick={() => {
                getWeather(city).then((response) => {
                  setCity(response.data);
                  browserHistory.push("/city");
                });
              }}
              key={city}
            >
              {city}
            </div>
          ))}
        </div>
        <div className="flex">
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
