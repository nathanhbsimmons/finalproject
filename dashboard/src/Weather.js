import React, { Component } from 'react';

import './App.css';

class Weather extends Component {
  render() {
    return (
    <div>
      <div>
        <h1>Temp...in fucking Kelvin</h1>
        <h2>{this.props.weatherData.main.temp}*</h2>

      </div>
      <div>
        <h1>Wind Speed</h1>
        <h2>{this.props.weatherData.wind.speed}mph</h2>

      </div>
      <div>
        <h1>Humidity</h1>
        <h2>{this.props.weatherData.main.humidity}%</h2>

      </div>
      {/* <div>
        {this.props.weatherData.main.temp}
      </div> */}
    </div>
    );
  }
}

export default Weather;
