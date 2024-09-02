import moment from "moment";
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import getChartData, { areaChartMargin } from "./city-banner-chart-data";
import "./city-banner.scss";
import { useDispatch } from "react-redux";
import { removeCity } from "../../redux/features/weather/weatherSlice";
const CityBanner = ({
  city: {
    imageIcon,
    name,
    temp,
    pressure,
    humidity,
    dt,
    timezone,
    sunrise,
    sunset,
  },
  removeBtn = true,
  setSelectedIndex = () => {},
}) => {
  const dispatch = useDispatch();
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
          <sup>o</sup>
        </div>
      </div>
      <div className="border card city_banner_content">
        <div className="city_banner_content_item">
          <div>TIME</div>
          <div className="city_banner_content_item_value">
            {moment.utc((dt + timezone) * 1000).format("hh:mm A")}
          </div>
        </div>
        <div className="city_banner_content_item">
          <div>PRESSURE</div>
          <div className="city_banner_content_item_value">{pressure}</div>
        </div>
        <div className="city_banner_content_item">
          <div>% RAIN</div>
          <div className="city_banner_content_item_value">-</div>
        </div>
        <div className="city_banner_content_item">
          <div>HUMIDITY</div>
          <div className="city_banner_content_item_value">{humidity}</div>
        </div>
      </div>
      <div className="border card city_banner_footer">
        <div className="city_banner_footer_item">
          <div>Sunset and Sunrise</div>
          <div className="city_banner_footer_dot_container">
            <div>
              Length of day :{" "}
              <b className="city_banner_text">
                {moment
                  .unix(sunset - sunrise)
                  .utc()
                  .format("H[H] m[M]")}
              </b>{" "}
            </div>
            <div>
              Remaining daylight:{" "}
              <b className="city_banner_text">
                {moment
                  .unix(sunset - dt)
                  .utc()
                  .format("H[H] m[M]")}
              </b>{" "}
            </div>
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
            dispatch(removeCity(name));
            setSelectedIndex(0);
          }}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default CityBanner;
