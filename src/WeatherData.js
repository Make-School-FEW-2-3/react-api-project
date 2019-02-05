import React, { Component } from 'react'
import Temperature from './Temperature';
import WeatherDescription from './WeatherDescription';

export default class WeatherData extends Component {
  render() {
    return (
        <div>
          <WeatherDescription 
          title={this.props.main}
          description={this.props.description}
          icon={this.props.icon}
          />
          <Temperature temp={this.props.temp}/>
          <div>Pressure: {this.props.pressure}</div>
          <div>Humidity: {this.props.humidity}</div>
          <div>Temp Min: {this.props.temp_min} Max:{this.props.temp_max}</div>
        </div>
      )
  }
}
