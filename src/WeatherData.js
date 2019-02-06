import React, { Component } from 'react'
import Temperature from './Temperature';
import WeatherDescription from './WeatherDescription';
import Atmosphere from './Atmosphere';

export default class WeatherData extends Component {
  render() {
    return (
        <div className='WeatherData'>
          <WeatherDescription {...this.props}/>
          <Atmosphere {...this.props}/>
          <div>Low:   <Temperature temp={this.props.temp_min}/></div>
          <div>High:  <Temperature temp={this.props.temp_max}/></div>
        </div>
      )
  }
}
