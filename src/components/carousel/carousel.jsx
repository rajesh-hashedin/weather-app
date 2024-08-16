import React, { Component } from "react";
import CityBanner from "../city-banner/city-banner";
import { GoDot, GoDotFill } from "react-icons/go";
export default class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }
  render() {
    const { cities } = this.props;
    console.log(this.state.index, cities);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <CityBanner
            city={
              cities[this.state.index] ? cities[this.state.index] : cities[0]
            }
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {cities.map((city, index) => {
            if (index === this.state.index)
              return (
                <GoDotFill style={{ cursor: "pointer" }} key={city.name} />
              );
            else
              return (
                <GoDot
                  style={{ cursor: "pointer" }}
                  onClick={() => this.setState({ index })}
                  key={city.name}
                />
              );
          })}
        </div>
      </div>
    );
  }
}
