import React, { useState } from "react";
import CityBanner from "../city-banner.jsx/city-banner";
import { useSelector } from "react-redux";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import "./carousel.scss";
const Carousel = () => {
  const weather = useSelector((state) => state.weather);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="carousel_container">
      <div>
        <CityBanner
          setSelectedIndex={setSelectedIndex}
          key={weather.cities[selectedIndex].name}
          city={weather.cities[selectedIndex]}
        />
      </div>
      <div className="carousel_banner">
        {weather.cities.map((city, index) => {
          if (selectedIndex === index)
            return <FiberManualRecordIcon className="icon" key={city.name} />;
          else
            return (
              <FiberManualRecordOutlinedIcon
                className="icon"
                onClick={() => setSelectedIndex(index)}
                key={city.name}
              />
            );
        })}
      </div>
    </div>
  );
};

export default Carousel;
