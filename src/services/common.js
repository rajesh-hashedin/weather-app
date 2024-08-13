import axios from "axios";
export const getWeather = async (cityname) => {
  if (cityname) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=7901bbc1eb4f465b56f10ddecf5c72d1`
    );
    return response.data;
  }
  return {};
};
