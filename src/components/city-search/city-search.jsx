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
        <div className="city_search_name_container">
          {searchHistory.map(function (city) {
            return (
              <div
                className="border card city_search_item"
                onClick={function () {
                  getWeather(city).then(function (response) {
                    if (response.data === 0) {
                      alert("Add openweather api key in env file");
                    } else {
                      setCity(response.data);
                      browserHistory.push("/city");
                    }
                  });
                }}
                key={city}
              >
                {city}
              </div>
            );
          })}
        </div>
        <div className="flex">
          {selectedCity === 0 && <div>No city found</div>}
          {selectedCity !== 0 && selectedCity !== null && (
            <CityCard city={selectedCity} />
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    weather: state.weather,
  };
}

const mapDispatchToProps = {
  setCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);
