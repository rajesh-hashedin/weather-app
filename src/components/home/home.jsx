import React, { Component } from "react";
import Input from "../input/input";
import { connect } from "react-redux";
import Chip from "../chip/chip";
import CityCard from "../city-card/city-card";
import { getWeather } from "../../services/common";
import CityBanner from "../city-banner/city-banner";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { addSearchCity, removeCity } from "../../redux/actions";
import NoLocationSVG from "../../assets/no_location.svg";
import { Link } from "react-router";
class Home extends Component {
  timeoutId = 0;
  constructor() {
    super();
    this.state = {
      inputFocus: false,
      city: null,
    };
  }
  onSearch = (value) => {
    this.setState({ inputFocus: value });
  };

  fetchData = async (city) => {
    if (this.timeoutId) clearInterval(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      if (city.trim()) {
        getWeather(city).then((response) =>
          this.setState({ ...this.state, city: response })
        );
      }
    }, 1000);
  };
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  render() {
    const { searchHistory, cities, removeCity } = this.props;
    console.clear();
    console.log(cities);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
        }}
      >
        <div>
          <Input
            placeholder="Search Location"
            inputFocus={this.state.inputFocus}
            onSearch={this.onSearch}
            fetchData={this.fetchData}
          />
        </div>
        {searchHistory.length > 0 && this.state.inputFocus && (
          <div style={{ display: "flex", gap: "1rem" }}>
            {searchHistory.map((cityName) => (
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                key={cityName}
                to={`/${cityName}`}
              >
                <Chip name={cityName} />
              </Link>
            ))}
          </div>
        )}
        {this.state.inputFocus && this.state.city && (
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <CityCard key={this.state.city.name} city={this.state.city} />
          </div>
        )}
        <div>
          {!this.state.inputFocus && cities.length > 0 && (
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {cities.map((city) => (
                  <div key={city.name} className="swiper-slide">
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <div
                        style={{
                          cursor: "pointer",
                          backgroundColor: "#EC7272",
                          color: "white",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          removeCity(city.name);
                        }}
                      >
                        Remove
                      </div>
                    </div>

                    <CityBanner city={city} />
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          )}
          {!this.state.inputFocus && cities.length > 0 && (
            <div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          )}
        </div>
        {!this.state.inputFocus && cities.length === 0 && (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <img height={100} width={200} src={NoLocationSVG} alt="" />
            </div>
            <div>No locations added to watchlist</div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  searchHistory: state.weather.searchHistory,
  cities: state.weather.cities,
});
const mapDispatchToProps = {
  removeCity,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
