import axios from "axios";

const API_KEY  = "75420c4e2026a41d6854b2bbfbf72ef0";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city: any) {
  const url     = `${ROOT_URL}&q=${city},ind`;
  const request = axios.get(url);
  console.log(request);
  return {
    type   : FETCH_WEATHER,
    payload: request
  }
}