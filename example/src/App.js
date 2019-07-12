import React, { Component } from 'react'

import SimpleReactWeather from 'simple-react-weather'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempUnits: 'C',
      appId: 'e1b9c3c4f419e12a1707f7954069e310',
      city: 'New York'
    };
  }
  componentDidMount() {
    this.getLocation();
  }
  getLocation = (e) => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    },
      error => {
        alert("There was an error while trying to get the location of the device. Check console for more details.")
        console.log(error)
      }, { timeout: 10000 });

  }
  handleCityInput = (e) => {
    let cityName = e.target.value;
    clearTimeout(this.inputTimeout)
    this.inputTimeout = setTimeout(() => {
      console.log(cityName)
      this.setState({
        city: cityName
      })
    }, 800)

  }
  render() {
    return (
      <div className="center">
        <div className="boxes boxCity">
          <h2>Enter City Name</h2>
          <input onInput={this.handleCityInput} id="city" name="city" placeholder="E.g. New York" />
          {(this.state.city) &&
            <div id="weatherCity"><SimpleReactWeather unit={this.state.tempUnits} city={this.state.city} appid={this.state.appId} /></div>
          }
        </div>
        <div className="boxes boxLocation">
          <h2>Based On Your Current Location</h2>
          <button onClick={this.getLocation} id="getLocation">Request Location</button>
          {(this.state.longitude && this.state.latitude) &&
            <div id="weatherLocation"><SimpleReactWeather unit={this.state.tempUnits} lat={this.state.latitude} lon={this.state.longitude} appid={this.state.appId} /></div>
          }
        </div>

      </div>
    )
  }
}
