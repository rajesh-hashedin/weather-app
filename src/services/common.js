import axios from "axios";
export function getWeather(cityname) {
  if (cityname) {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=7901bbc1eb4f465b56f10ddecf5c72d1`
    );
    return response;
  }
  return {};
}
