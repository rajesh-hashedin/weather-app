import React, { Component } from "react";
import CityBanner from "../city-banner/city-banner";
import { GoDot, GoDotFill } from "react-icons/go";
import "./carousel.scss";
export default class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
    this.handleCarousel = this.handleCarousel.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleCarousel(city, index) {
    const that = this;
    if (index === this.state.index)
      return <GoDotFill className="react_icons" key={city.name} />;
    else
      return (
        <GoDot
          className="react_icons"
          onClick={function () {
            that.setState({ index });
          }}
          key={city.name}
        />
      );
  }
  handleRemove() {
    this.setState({ index: 0 });
  }
  render() {
    const { cities } = this.props;
    return (
      <div className="carousel_container">
        <div>
          <CityBanner
            city={cities[this.state.index]}
            handleRemove={this.handleRemove}
          />
        </div>
        <div className="carousel_banner">{cities.map(this.handleCarousel)}</div>
      </div>
    );
  }
}
