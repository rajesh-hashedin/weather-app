import React, { Component } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { browserHistory } from "react-router";
import { addSearchCity } from "../../redux/actions";
import { connect } from "react-redux";
import "./city-card.scss";
class CityCard extends Component {
  render() {
    const {
      name,
      weather,
      main: { temp },
    } = this.props.city;
    const { addSearchCity } = this.props;
    return (
      <div className="border shadow card city_card_container">
        <div className="city_card_header">
          <div className="city_card_header_name">{name}</div>
          <div>
            <IoIosArrowForward
              className="react_icons"
              onClick={function () {
                addSearchCity(name);
                browserHistory.push("/city");
              }}
            />
          </div>
        </div>
        <div className="city_card_content">
          <div className="city_card_temp">{Math.floor(temp - 273.15)}</div>
          <div>
            <img
              height={60}
              width={60}
              src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
        </div>
        <div className="city_card_footer">
          <div>{weather[0].main}</div>
          <div>{weather[0].description}</div>
        </div>
      </div>
    );
  }
}
function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  addSearchCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityCard);
