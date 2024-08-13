import React, { Component } from "react";
import { setCity } from "../../redux/actions";
import { connect } from "react-redux";
import Input from "../input/input";
import Carousel from "../carousel/carousel";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputFocus: false,
    };
  }
  setInputFocus = (value) => {
    this.setState({ ...this.state, inputFocus: value });
  };
  render() {
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
          />
        </div>
        {this.state.inputFocus ? (
          <div>city list</div>
        ) : (
          <div>
            <Carousel
              cities={[
                { name: "Pune", temp: 100, imageIcon: "10d" },
                { name: "Solapur", temp: 100, imageIcon: "10d" },
              ]}
            />
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
