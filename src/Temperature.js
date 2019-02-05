import React, { Component } from 'react'

export default class Temperature extends Component {
  kToF = (temp) => {
    const farenheit = (this.props.temp - 273.15) * 9/5 + 32;
    return farenheit.toPrecision(3);
  }
  
  render() {
        const ret = this.kToF() + '˚F';
        return ret;
    
  }
}
