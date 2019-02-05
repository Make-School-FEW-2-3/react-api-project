import React, { Component } from 'react'
import Temperature from './Temperature';

export default class WeatherData extends Component {
  render() {
    return (
        <div>
          <div>Title: {this.props.main}</div>
          <div>Desc: {this.props.description}</div>
          <div>Icon: {this.props.icon}</div>
          <Temperature temp={this.props.temp}/>
          <div>Pressure: {this.props.pressure}</div>
          <div>Humidity: {this.props.humidity}</div>
          <div>Temp Min: {this.props.temp_min} Max:{this.props.temp_max}</div>
        </div>
      )
  }
}
