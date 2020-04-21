import React from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import "../style/table.css"

class WeatherList extends React.Component<any, any> {
  renderWeather(cityData: any) {
    const temps     = cityData.list.map((weather: any) =>
      weather.main.temp);
    const pressures = cityData.list.map((weather: any) =>
      weather.main.pressure);
    const humidity  = cityData.list.map((weather: any) =>
      weather.main.humidity);

    return (
      <tr key = {cityData.city.name}>
        <td><strong style={{color:"black",fontSize:"25px"}}>{cityData.city.name}</strong></td>
        <td>
          <Chart data = {temps} color = {"orange"} units = {"K"}/>
        </td>
        <td>
          <Chart data = {pressures} color = {"green"} units = {"hPa"}/>
        </td>
        <td>
          <Chart data = {humidity} color = {"red"} units = {"%"}/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table>
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature(K)</th>
          <th>Pressure(hPa)</th>
          <th>Humidity(%)</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapsStateToProps(state: any) {
  return {weather: state.weather}
}

export default connect(mapsStateToProps)(WeatherList);