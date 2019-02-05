import React, { Component } from 'react'

export default class WeatherDescription extends Component {
  render() {
    return (
      <div>
        <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="icon"/>
        <h3>{this.props.title}</h3>
        <h5>{this.props.description}</h5>
      </div>
    )
  }
}
