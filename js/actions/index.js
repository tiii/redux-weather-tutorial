import axios from 'axios';

const API_KEY = '5ac3c208f2e7928ade4bf79a31eb73a3';
const FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city) {
  const request = axios.get(`${FORECAST_URL}&q=${city}`);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
