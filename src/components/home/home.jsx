import React, { useState } from "react";
import Input from "../input/input";
import "./home.scss";
import { getWeather } from "../services/common";
import NoLocationSVG from "../../assets/svg/no_location.svg";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../carousel/carousel";
let timeoutId = 0;
const Home = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const weather = useSelector((state) => state.weather);
  console.log(weather);
  const dispatch = useDispatch();
  const handleInputValue = (city) => {
    if (timeoutId) clearInterval(timeoutId);
    timeoutId = setTimeout(() => {
      if (city.trim()) {
        getWeather(city)
          .then((response) => {
            if (response.data === 0) {
              alert("Add openweather api key in env file");
            } else {
              console.log(response.data);
            }
          })
          .catch(() => {
            console.log("error");
          });
      }
    }, 1000);
  };
  return (
    <div className="home_container">
      <div>
        <Input
          inputFocus={inputFocus}
          setInputFocus={setInputFocus}
          handleInputValue={handleInputValue}
        />
      </div>
      {inputFocus ? (
        <div>City card</div>
      ) : weather.cities.length > 0 ? (
        <Carousel />
      ) : (
        <div className="no_location_container">
          <div>
            <img src={NoLocationSVG} alt="Logo" />
          </div>
          <div>No locations added to watchlist</div>
        </div>
      )}
    </div>
  );
};

export default Home;
