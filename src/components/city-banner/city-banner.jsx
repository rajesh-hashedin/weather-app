import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCity } from "../../redux/actions";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import { convertToLocalTimeString, getTimeInHM } from "../../utils/common";
class CityBanner extends Component {
  render() {
    const {
      imageIcon,
      name,
      temp,
      pressure,
      humidity,
      dt,
      timezone,
      sunrise,
      sunset,
    } = this.props.city;
    const { removeBtn = true, removeCity } = this.props;
    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${imageIcon}@2x.png`}
              alt=""
            />
          </div>
          <div style={{ fontSize: "20px", fontWeight: 700 }}>{name}</div>
          <div style={{ fontSize: "50px", fontWeight: 700 }}>
            {Math.floor(temp - 273.15)}
          </div>
        </div>
        <div
          style={{
            border: "1px solid gray",
            display: "flex",
            justifyContent: "space-around",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <div>
            <div>Time</div>
            <div>{convertToLocalTimeString(dt, timezone).slice(-7)}</div>
          </div>
          <div>
            <div>PRESSURE</div>
            <div>{pressure}</div>
          </div>
          <div>
            <div>% RAIN</div>
            <div>-</div>
          </div>
          <div>
            <div>HUMIDITY</div>
            <div>{humidity}</div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid gray",
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div>Sunset and Sunrise</div>
            <div>
              Length of day : <b>{getTimeInHM(sunrise, sunset)}</b>{" "}
            </div>
            <div>
              Remaining daylight: <b>{getTimeInHM(dt, sunset)}</b>{" "}
            </div>
          </div>
          <div>
            <AreaChart
              width={300}
              height={200}
              data={[
                {
                  name: "",
                  uv: 0,
                  pv: 1000,
                  amt: 1000,
                },
                {
                  name: "",
                  uv: -1000,
                  pv: 2400,
                  amt: 2400,
                },
                {
                  name: `${convertToLocalTimeString(sunrise, timezone).slice(
                    -7
                  )} SR`,
                  uv: 0,
                  pv: 2400,
                  amt: 2400,
                },
                {
                  name: "",
                  uv: 3000,
                  pv: 1398,
                  amt: 2210,
                },
                {
                  name: `${convertToLocalTimeString(sunset, timezone).slice(
                    -7
                  )} SS`,
                  uv: 0,
                  pv: 9800,
                  amt: 2290,
                },
              ]}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tick={false} hide />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#7CC9F2"
                fill="#7CC9F2"
              />
            </AreaChart>
          </div>
        </div>
        {removeBtn && (
          <div
            onClick={() => {
              removeCity(name);
            }}
            style={{
              top: 10,
              right: 10,
              border: "none",
              position: "absolute",
              cursor: "pointer",
              backgroundColor: "#EC7272",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Remove
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = () => ({});

const mapDispatchToProps = {
  removeCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityBanner);
