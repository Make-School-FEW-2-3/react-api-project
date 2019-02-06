import React, { Component } from 'react'

export default class Atmosphere extends Component {
  render() {
    return (
      <div>
        <div>Pressure: {this.props.pressure * 0.029529983071445}</div>
        <div>Humidity: {this.props.humidity}%</div>
      </div>
    )
  }
}
