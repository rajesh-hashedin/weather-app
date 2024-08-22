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
    this.handleDotButton = this.handleDotButton.bind(this);
  }
  handleDotButton(e) {
    this.setState({ index: Number(e.target.id) });
  }
  handleCarousel(city, index) {
    if (index === this.state.index)
      return <GoDotFill className="react_icons" key={city.name} />;
    else
      return (
        <GoDot
          className="react_icons"
          id={index}
          value={index}
          onClick={this.handleDotButton}
          key={city.name}
        />
      );
  }
  render() {
    const { cities } = this.props;
    return (
      <div className="carousel_container">
        <div>
          <CityBanner
            city={
              cities[this.state.index] ? cities[this.state.index] : cities[0]
            }
          />
        </div>
        <div className="carousel_banner">{cities.map(this.handleCarousel)}</div>
      </div>
    );
  }
}
