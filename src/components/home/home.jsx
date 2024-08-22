import React, { Component } from "react";
import { setCity } from "../../redux/actions";
import { connect } from "react-redux";
import Input from "../input/input";
import Carousel from "../carousel/carousel";
import CitySearch from "../city-search/city-search";
import { getWeather } from "../../services/common";
import "./home.scss";
import { NoLocationSVG } from "../../assets/svg/no_location";
class Home extends Component {
  constructor() {
    super();
    this.timeoutId = 0;
    this.state = {
      inputFocus: false,
    };
    this.setInputFocus = this.setInputFocus.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  setInputFocus(value) {
    this.setState({ inputFocus: value });
  }
  handleInputValue(city) {
    const that = this;
    if (this.timeoutId) clearInterval(this.timeoutId);
    this.timeoutId = setTimeout(function () {
      if (city.trim()) {
        getWeather(city).then(function (response) {
          that.props.setCity(response.data);
        });
      }
    }, 1000);
  }
  render() {
    const { cities } = this.props.weather;
    return (
      <div className="home_container">
        <div>
          <Input
            inputFocus={this.state.inputFocus}
            setInputFocus={this.setInputFocus}
            handleInputValue={this.handleInputValue}
          />
        </div>
        {this.state.inputFocus ? (
          <div>
            <CitySearch />
          </div>
        ) : (
          <div>
            {cities.length > 0 ? (
              <Carousel cities={cities} />
            ) : (
              <div className="no_location_container">
                <div>
                  <NoLocationSVG />
                </div>
                <div>No locations added to watchlist</div>
              </div>
            )}
          </div>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
