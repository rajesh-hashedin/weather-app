import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCity } from "../../redux/actions";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import moment from "moment/moment";
import getChartData, { areaChartMargin } from "./city-banner-chart-data";
import "./city-banner.scss";
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
      <div className="city_banner_container">
        <div className="city_banner_header">
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${imageIcon}@2x.png`}
              alt=""
            />
          </div>
          <div className="city_banner_header_name">{name}</div>
          <div className="city_banner_header_temp">
            {Math.floor(temp - 273.15)}
          </div>
        </div>
        <div className="border card city_banner_content">
          <div className="city_banner_content_item">
            <div>Time</div>
            <div>{moment.utc((dt + timezone) * 1000).format("hh:mm A")}</div>
          </div>
          <div className="city_banner_content_item">
            <div>PRESSURE</div>
            <div>{pressure}</div>
          </div>
          <div className="city_banner_content_item">
            <div>% RAIN</div>
            <div>-</div>
          </div>
          <div className="city_banner_content_item">
            <div>HUMIDITY</div>
            <div>{humidity}</div>
          </div>
        </div>
        <div className="border card city_banner_footer">
          <div className="city_banner_footer_item">
            <div>Sunset and Sunrise</div>
            <div>
              Length of day :{" "}
              <b style={{ color: "black" }}>
                {moment
                  .unix(sunset - sunrise)
                  .utc()
                  .format("H[H] m[M]")}
              </b>{" "}
            </div>
            <div>
              Remaining daylight:{" "}
              <b style={{ color: "black" }}>
                {moment
                  .unix(sunset - dt)
                  .utc()
                  .format("H[H] m[M]")}
              </b>{" "}
            </div>
          </div>
          <div>
            <AreaChart
              width={300}
              height={200}
              data={getChartData(sunrise, sunset, timezone)}
              margin={areaChartMargin}
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
          <button
            className="remove_button city_banner_remove_button"
            onClick={() => {
              removeCity(name);
            }}
          >
            Remove
          </button>
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
