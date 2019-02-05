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
          <div><Temperature temp={this.props.temp}/></div>
          <div>Pressure: {this.props.pressure}</div>
          <div>Humidity: {this.props.humidity}</div>
          <div><pre>Low: <Temperature temp={this.props.temp_min}/>
          , High: <Temperature temp={this.props.temp_max}/></pre></div>
        </div>
      )
  }
}
