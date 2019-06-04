import React from "react";
import "./App.css";
import CityList from "./components/CityList";
import WeatherDetails from "./components/WeatherDetails";

class App extends React.Component {
  state = {
    currentCityID: "1566083"
  };

  onCitySelect = e => {
    this.setState({ currentCityID: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>City Weather</h1>
        <div style={{ margin: "50px auto" }}>
          <CityList
            currentCity={this.state.currentCity}
            onCitySelect={this.onCitySelect}
          />
        </div>
        <div style={{ margin: "50px auto" }}>
          <WeatherDetails currentCityID={this.state.currentCityID} />
        </div>
      </div>
    );
  }
}

export default App;
