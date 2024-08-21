import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import CityBanner from "../city-banner/city-banner";
import { BiCheck, BiPlus } from "react-icons/bi";
import { addCity, removeCity, setCity } from "../../redux/actions";
import { IoIosArrowBack } from "react-icons/io";
import "./city.scss";
class City extends Component {
  constructor() {
    super();
    this.state = {
      alreadySent: false,
    };
    this.handleAddToList = this.handleAddToList.bind(this);
    this.handleRemoveButton = this.handleRemoveButton.bind(this);
    this.handleIsCityExist = this.handleIsCityExist.bind(this);
  }
  handleIsCityExist(city) {
    return city.name === this.props.weather.selectedCity.name;
  }
  componentDidMount() {
    if (this.props.weather.cities.find(this.handleIsCityExist)) {
      this.setState({ alreadyAdded: true });
    }
  }
  handleRemoveButton() {
    const { selectedCity } = this.props.weather;
    this.props.removeCity(selectedCity.name);
    this.setState({ alreadyAdded: false });
  }
  handleAddToList() {
    if (!this.state.alreadyAdded) {
      const { selectedCity } = this.props.weather;
      const { addCity } = this.props;
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
  }
  render() {
    const { selectedCity } = this.props.weather;
    const { setCity } = this.props;
    return (
      <div className="city_container">
        <div className="city_button_container">
          <div
            className="city_back_button"
            onClick={function () {
              setCity(null);
              browserHistory.push("/");
            }}
          >
            <IoIosArrowBack />
            <div className="city_back_text">Back</div>
          </div>
          <div className="city_add_button_container">
            {this.state.alreadyAdded ? (
              <button
                onClick={this.handleAddToList}
                className="city_add_button city_add_to_list_button"
              >
                <span>Added to list</span>
                <BiCheck />
              </button>
            ) : (
              <button
                onClick={this.handleAddToList}
                className="city_add_button"
              >
                <span>Add to list</span>{" "}
                <BiPlus size={20} className="city_add_button_icon" />
              </button>
            )}
            {this.state.alreadyAdded && (
              <button
                className="remove_button"
                onClick={this.handleRemoveButton}
              >
                Remove
              </button>
            )}
          </div>
        </div>
        <div className="city_details">
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
function mapStateToProps(state) {
  return {
    weather: state.weather,
  };
}

const mapDispatchToProps = {
  removeCity,
  addCity,
  setCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
