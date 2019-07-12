import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './styles.css'
import WeatherIcon from 'react-icons-weather';
const callApi = async (url) => {

  let head = {
  }

  const response = await fetch(url, {
      method: "GET",
      headers: head,

  });
  const respbody = await response.json();


  if (response.status !== 200) throw Error(respbody.message);

  return respbody;
};

class SimpleReactWeather extends Component {
  constructor(props) {
      super(props);
      this.state = {
          temp: '',
          city: '',
          icon: "800"
      };
  }
  componentDidMount() {
    this.callOWM();
  }
  componentDidUpdate(prevProps) {
      if ((this.props.city!== prevProps.city) || (this.props.lat!== prevProps.lat) || (this.props.lon !== prevProps.lon)) {
        this.callOWM();
      }
    
  }
  callOWM = () => {
    if (this.props.lat && this.props.lon) {
        callApi(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${this.props.appid}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "GET"
            })
            .then(res => {
                this.setState({
                    temp: res.main.temp,
                    city: res.name,
                    icon: res.weather[0].id
                })
            })
            .catch(res => { console.log(res) })
    }
    else if (this.props.city) {
        callApi(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=${this.props.appid}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "GET"
            })
            .then(res => {
                this.setState({                        
                    temp: res.main.temp,
                    city: res.name,
                    icon: res.weather[0].id
                })
            })
            .catch(res => { console.log(res) })
    }
  }
  render() {
      return (
          <div {...this.props} className={style.simpleReactWeather}>
              <div className={style.simpleReactWeatherCityIcon}> 
              <WeatherIcon className={style.simpleReactWeatherIcon} name="owm" iconId={String(this.state.icon)} flip="horizontal" rotate="90" />
              <p className={style.simpleReactWeatherCity}>{this.state.city}</p>
              </div>
              <p className={style.simpleReactWeatherTemp}>{this.props.unit == "F" ? Math.round(this.state.temp * (9/5) - 459.67) + "°F": Math.round(this.state.temp - 273.15) + "°C"}</p>
              
          </div>
      );
  }
}
SimpleReactWeather.propTypes = {
    city: PropTypes.string,
    lat: PropTypes.number,
    lon: PropTypes.number,
    appid: PropTypes.string
  };
export default SimpleReactWeather;
