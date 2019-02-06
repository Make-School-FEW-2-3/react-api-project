import React, { Component } from 'react'
import Temperature from './Temperature';
import WeatherDescription from './WeatherDescription';
import Atmosphere from './Atmosphere';

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
          <Atmosphere {...this.props}/>
          <div>Low:   <Temperature temp={this.props.temp_min}/></div>
          <div>High:  <Temperature temp={this.props.temp_max}/></div>
        </div>
      )
  }
}
