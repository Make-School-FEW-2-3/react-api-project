import React, { Component } from 'react'
import Temperature from './Temperature';

export default class WeatherDescription extends Component {
  render() {
    return (
      <div>
        <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="icon"/>
        <h3>{this.props.main}</h3>
        <h5>{this.props.description}</h5>
        <div><Temperature temp={this.props.temp}/></div>
      </div>
    )
  }
}
