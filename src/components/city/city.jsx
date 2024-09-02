import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import CityBanner from "../city-banner.jsx/city-banner";
import "./city.scss";
import {
  addCity,
  removeCity,
  setCity,
} from "../../redux/features/weather/weatherSlice.js";
import { useNavigate } from "react-router-dom";

const City = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedCity, cities } = useSelector((state) => state.weather);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  console.log(cities);
  const handleAddToList = () => {
    if (!alreadyAdded) {
      dispatch(
        addCity({
          imageIcon: selectedCity.weather[0].icon,
          name: selectedCity.name,
          temp: selectedCity.main.temp,
          pressure: selectedCity.main.pressure,
          humidity: selectedCity.main.humidity,
          dt: selectedCity.dt,
          timezone: selectedCity.timezone,
          sunrise: selectedCity.sys.sunrise,
          sunset: selectedCity.sys.sunset,
        })
      );
      setAlreadyAdded(true);
    }
  };
  const handleRemoveButton = () => {
    dispatch(removeCity(selectedCity.name));
    setAlreadyAdded(false);
  };
  useEffect(() => {
    if (!selectedCity) navigate("/");

    if (cities.find((city) => city.name === selectedCity.name)) {
      setAlreadyAdded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="city_container">
      <div className="city_button_container">
        <div
          className="city_back_button"
          onClick={() => {
            dispatch(setCity(null));
            navigate("/");
          }}
        >
          <ArrowBackIosNewIcon />
          <div className="city_back_text">Back</div>
        </div>
        <div className="city_add_button_container">
          {alreadyAdded ? (
            <button
              onClick={handleAddToList}
              className="city_add_button city_add_to_list_button"
            >
              <span>Added to list</span>
              <CheckIcon />
            </button>
          ) : (
            <button onClick={handleAddToList} className="city_add_button">
              <span>Add to list</span>{" "}
              <AddIcon className="city_add_button_icon" />
            </button>
          )}
          {alreadyAdded && (
            <button className="remove_button" onClick={handleRemoveButton}>
              Remove
            </button>
          )}
        </div>
      </div>
      <div className="city_details">
        {selectedCity && (
          <CityBanner
            removeBtn={false}
            city={{
              imageIcon: selectedCity.weather[0].icon,
              name: selectedCity.name,
              temp: selectedCity.main.temp,
              pressure: selectedCity.main.pressure,
              humidity: selectedCity.main.humidity,
              dt: selectedCity.dt,
              timezone: selectedCity.timezone,
              sunrise: selectedCity.sys.sunrise,
              sunset: selectedCity.sys.sunset,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default City;
