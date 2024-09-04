import React, { useEffect, useState } from "react";
import Input from "../input/input";
import "./home.scss";
import { getWeather } from "../../services/common";
import NoLocationSVG from "../../assets/svg/no_location.svg";
import { useSelector } from "react-redux";
import Carousel from "../carousel/carousel";
import CityCard from "../city-card/city-card";
import CitySearchList from "../city-search-list/city-search-list";

const Home = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [cityData, setCityData] = useState(null);

  const weather = useSelector((state) => state.weather);
  const handleInputValue = (city) => {
    if (city.trim()) {
      getWeather(city)
        .then((response) => {
          if (response.data === 0) {
            alert("Add openweather api key in env file");
          } else {
            setCityData(response.data);
          }
        })
        .catch(() => {
          setCityData(null);
        });
    }
  };
  useEffect(() => {
    if (!inputFocus) {
      setCityData(null);
    }
  }, [inputFocus]);
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
        <div className="home_city_search_container">
          <div data-testid="city_search_list">
            <CitySearchList cities={weather.searchHistory} />
          </div>
          <div>{cityData ? <CityCard city={cityData} /> : "No city found"}</div>
        </div>
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
