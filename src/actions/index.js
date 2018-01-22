import axios from 'axios';

const API_KEY = '1e1edce443fdfa4872cc6eeedddb275d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},it`;

  const request = axios.get(url);

  console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
