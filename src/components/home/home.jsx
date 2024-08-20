import React, { Component } from "react";
import { setCity } from "../../redux/actions";
import { connect } from "react-redux";
import Input from "../input/input";
import Carousel from "../carousel/carousel";
import CitySearch from "../city-search/city-search";
import { getWeather } from "../../services/common";
import { FaCloud } from "react-icons/fa";
import "./home.scss";

// import NoLocationSVG from "../../assets/no_location.svg";
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
    if (this.timeoutId) clearInterval(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      if (city.trim()) {
        getWeather(city).then((response) => {
          this.props.setCity(response.data);
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
                  <FaCloud size={300} color="#D7D7D7" />
                  {/* <img height={100} width={200} src={NoLocationSVG} alt="" /> */}
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
const mapStateToProps = (state) => ({
  weather: state.weather,
});

const mapDispatchToProps = {
  setCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
