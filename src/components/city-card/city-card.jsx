import React, { Component } from "react";
import { BiArrowToRight } from "react-icons/bi";
import { Link } from "react-router";
import { addSearchCity } from "../../redux/actions";
import { connect } from "react-redux";

class CityCard extends Component {
  render() {
    const {
      name,
      main: { temp },
      weather,
    } = this.props.city;
    const { addSearchCity } = this.props;
    return (
      <div
        style={{
          flexBasis: "13rem",
          border: "1px solid gray",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          borderRadius: "1rem",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>{name}</div>
          <Link
            to={`/${name}`}
            onClick={() => {
              addSearchCity(name);
            }}
          >
            <BiArrowToRight style={{ cursor: "pointer" }} />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>{temp}</div>
          <div></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>{weather[0].main}</div>
          <div>{weather[0].description}</div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  addSearchCity,
};
export default connect(() => ({}), mapDispatchToProps)(CityCard);
