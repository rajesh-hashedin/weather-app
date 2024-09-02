import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./city-card.scss";
import { useDispatch } from "react-redux";
import {
  addSearchCity,
  setCity,
} from "../../redux/features/weather/weatherSlice.js";
import { useNavigate } from "react-router-dom";
const CityCard = ({ city }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="border shadow card city_card_container">
      <div className="city_card_header">
        <div className="city_card_header_name">{city.name}</div>
        <div>
          <ArrowForwardIosIcon
            onClick={() => {
              dispatch(setCity(city));
              dispatch(addSearchCity(city.name));
              navigate("/city");
            }}
            className="icon"
          />
        </div>
      </div>
      <div className="city_card_content">
        <div className="city_card_temp">
          {Math.floor(city.main.temp - 273.15)}
        </div>
        <div>
          <img
            height={60}
            width={60}
            src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
      </div>
      <div className="city_card_footer">
        <div>{city.weather[0].main}</div>
        <div>{city.weather[0].description}</div>
      </div>
    </div>
  );
};

export default CityCard;
