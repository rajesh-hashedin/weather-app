import React, { Component } from "react";
import { AreaChart, Area } from "recharts";

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

export default class CityBanner extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div>
          <div>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />
          </div>
          <div style={{ fontSize: "20px", fontWeight: 700 }}>Banglore</div>
          <div style={{ fontSize: "50px", fontWeight: 700 }}>25</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#FDFCFC",
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "1rem",
          }}
        >
          <div>
            <div>TIME</div>
            <div style={{ fontWeight: 700 }}>11:30 AM</div>
          </div>
          <div>
            <div>PRESSURE</div>
            <div style={{ fontWeight: 700 }}>345</div>
          </div>
          <div>
            <div>% RAIN</div>
            <div style={{ fontWeight: 700 }}>58%</div>
          </div>
          <div>
            <div>HUMIDITY</div>
            <div style={{ fontWeight: 700 }}>22</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#FDFCFC",
            border: "1px solid gray",
            borderRadius: "5px",
            height: "150px",
          }}
        >
          <dir
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <div>SUNRISE & SUNSET</div>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              <div>Length of day: 13H 12M</div>
              <div>Remaining daylight: 9H 22M</div>
            </div>
          </dir>
          <div style={{ height: "100%" }}>
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
      </div>
    );
  }
}
