import axios from 'axios';

const API_KEY = '4179c8e36d557b7de11134f8d51b63c4';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const GET_WEATHER = 'GET_WEATHER';

export function getWeather(city) {
  const url = `${BASE_URL}&q=${city},in`;
  const requestData = axios.get(url);

  return {
    type: GET_WEATHER,
    payload: requestData
  };
}
