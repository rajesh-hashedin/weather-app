import axios from "axios";

export const getWeather = (cityname) => {
  if (!process.env.REACT_APP_OPEN_WEATHER_API_KEY) {
    return new Promise(function (res) {
      res({ data: 0 });
    });
  }
  if (cityname) {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
    );
    return response;
  }
};
