# simple-react-weather

Very basic weather applet for React with icons from [react-icons-weather](https://www.npmjs.com/package/react-icons-weather)  
Demo available [here](https://lopogo59.github.io/simple-react-weather/)


[![NPM](https://img.shields.io/npm/v/simple-react-weather.svg)](https://www.npmjs.com/package/simple-react-weather) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-react-weather
```

## Usage

```jsx
import React, { Component } from 'react'
import Weather from 'simple-react-weather'

class Example extends Component {
  render () {
    return (
      //With city name provided
      <Weather unit="C" city="CITY" appid="YOUR APPID FROM OWM" />
      //Based on latitude and longitude
      <Weather unit="C" lat="" lon="" appid="YOUR APPID FROM OWM" />
    )
  }
}
```
## Props
**unit: String**  
C for Celcius, F for Fahrenheit  
**lat/lon: Number**  
Latitude and longitude, can be acquired from navigator.geolocation.getCurrentPosition()  
**city: String**  
**appid: String**  
Your AppId from OWM    

You can also use all other custom props like onClick, id etc.

## License

GNU GPLv3 © [lopogo59](https://github.com/lopogo59)
