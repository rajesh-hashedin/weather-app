import React, { Component } from "react";
import { setCity } from "../../redux/actions";
import { connect } from "react-redux";
import Input from "../input/input";
import Carousel from "../carousel/carousel";
import CitySearch from "../city-search/city-search";
import { getWeather } from "../../services/common";
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
    console.log(cities);
    return (
      <div
        style={{
          paddingTop: "1rem",
          display: "flex",
          flexDirection: "column",
          maxWidth: "60%",
          margin: "auto",
        }}
      >
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
            <Carousel cities={cities} />
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
