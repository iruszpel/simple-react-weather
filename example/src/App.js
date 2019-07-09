import React, { Component } from 'react'

import SimpleReactWeather from 'simple-react-weather'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempUnits: 'C',
      appId: 'e1b9c3c4f419e12a1707f7954069e310'
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    });
  }
  render() {
    return (
      <div>
        {(this.state.longitude && this.state.latitude) &&
          <div id="weather"><SimpleReactWeather unit={this.state.tempUnits} lat={this.state.latitude} lon={this.state.longitude} appid={this.state.appId} /></div>
        }
      </div>
    )
  }
}
