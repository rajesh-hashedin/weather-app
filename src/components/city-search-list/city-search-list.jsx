import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { getWeather } from "../../services/common";
import { useDispatch } from "react-redux";
import { setCity } from "../../redux/features/weather/weatherSlice";
import { useNavigate } from "react-router-dom";
const CitySearchList = ({ cities = [] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={1}>
      {cities.map((city) => (
        <Chip
          key={city}
          onClick={async () => {
            const response = await getWeather(city);
            dispatch(setCity(response.data));
            navigate("/city");
          }}
          label={city}
          variant="outlined"
        />
      ))}
    </Stack>
  );
};

export default CitySearchList;
