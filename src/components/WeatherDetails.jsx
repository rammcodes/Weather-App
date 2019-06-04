import React, { Component } from "react";
import axios from "axios";

const weather_api_key = "fa79dd240db0096c802b0197e9c0af3e";

class WeatherDetails extends Component {
  state = {
    weatherData: null
  };

  setWeatherData = data => {
    this.setState({ weatherData: data });
  };

  componentDidMount() {
    axios
      .post(
        `https://api.openweathermap.org/data/2.5/weather?id=${
          this.props.currentCityID
        }&appid=${weather_api_key}&units=metric`
      )
      .then(res => this.setState({ weatherData: res.data }));
  }

  componentWillReceiveProps(nextProps) {
    axios
      .post(
        `https://api.openweathermap.org/data/2.5/weather?id=${
          nextProps.currentCityID
        }&appid=${weather_api_key}&units=metric`
      )
      .then(res => this.setState({ weatherData: res.data }));
  }

  render() {
    if (this.state.weatherData === null) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    return (
      <h1>
        Current Weather : {this.state.weatherData.main.temp} degree celcius !
      </h1>
    );
  }
}

export default WeatherDetails;
