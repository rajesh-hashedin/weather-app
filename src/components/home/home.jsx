import React, { Component } from "react";
import Input from "../input/input";
import { connect } from "react-redux";
import Chip from "../chip/chip";
import CityCard from "../city-card/city-card";
import { getWeather } from "../../services/common";
import CityBanner from "../city-banner/city-banner";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputFocus: false,
    };
  }
  onSearch = (value) => {
    this.setState({ inputFocus: value });
  };
  //   componentDidMount() {
  //     this.fetchData();
  //   }
  //   fetchData = async () => {
  //     const data = await getWeather("kolhapur");
  //     console.log(data);
  //   };
  render() {
    const { searchHistory, cities } = this.props;
    console.log(this.state.inputFocus);
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
          />
        </div>
        {searchHistory.length && this.state.inputFocus && (
          <div style={{ display: "flex", gap: "1rem" }}>
            {searchHistory.map((sh) => (
              <Chip key={sh} name={sh} />
            ))}
          </div>
        )}
        {this.state.inputFocus &&
          (cities.length ? (
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {cities.map((city) => (
                <CityCard key={city.name} city={city} />
              ))}
            </div>
          ) : (
            <div>No locations added to watchlist</div>
          ))}
        {!this.state.inputFocus && <CityBanner />}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  searchHistory: state.counter.searchHistory,
  cities: state.counter.cities,
});

export default connect(mapStateToProps)(Home);
