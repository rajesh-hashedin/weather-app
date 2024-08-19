import React, { Component } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { browserHistory } from "react-router";
import { addSearchCity } from "../../redux/actions";
import { connect } from "react-redux";
class CityCard extends Component {
  render() {
    const {
      name,
      weather,
      main: { temp },
    } = this.props.city;
    const { addSearchCity } = this.props;
    return (
      <div
        className="border shadow card"
        style={{
          borderRadius: "5px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          flexBasis: "15rem",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>{name}</div>
          <div>
            <IoIosArrowForward
              style={{ cursor: "pointer" }}
              onClick={() => {
                addSearchCity(name);
                browserHistory.push("/city");
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontWeight: "bold", fontSize: "3rem" }}>
            {Math.floor(temp - 273.15)}
          </div>
          <div>
            <img
              height={60}
              width={60}
              src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            color: "#BFAF1B",
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
const mapStateToProps = () => ({});

const mapDispatchToProps = {
  addSearchCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityCard);
