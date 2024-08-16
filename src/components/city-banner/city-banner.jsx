import React, { Component } from "react";
import { connect } from "react-redux";
import { AreaChart, Area } from "recharts";
import { removeCity } from "../../redux/actions";
const data = [
  {
    name: "Page A",
    uv: -4000,
    pv: -2400,
    amt: -2400,
  },
  {
    name: "Page B",
    uv: -3000,
    pv: -1398,
    amt: -2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
class CityBanner extends Component {
  render() {
    const { imageIcon, name, temp } = this.props.city;
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
          <div style={{ fontSize: "50px", fontWeight: 700 }}>{temp}</div>
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
            <div>11:50</div>
          </div>
          <div>
            <div>Time</div>
            <div>11:50</div>
          </div>
          <div>
            <div>Time</div>
            <div>11:50</div>
          </div>
          <div>
            <div>Time</div>
            <div>11:50</div>
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
          <div>Sunset and Sunrise</div>
          <div>
            {" "}
            <AreaChart
              width={300}
              height={100}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
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
