import React, { Component } from 'react';
import OpenWeatherMap from 'react-open-weather-map';
import $ from 'jquery';


const WeatherStyles = {
  height: '70%',
  width: '70%',
  margin: '0 auto',
  padding: '20px',
  border: '5px solid #496B77',
};

class WeatherMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  ComponentDidMount() {
    this.WeatherData();
  }

  WeatherData() {
    $.getJSON('https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=235737c7a314ff35a397f5aac6afe065')
    .then(({ results }) => this.setState({ data : results }));
  }


  render() {
    const weatherTemp = this.state.data.map((item, i) => (

      <div>
        <p>{item.list[2].main}</p>
      </div>
    ));
    return (
      <div stlye={WeatherStyles}>
        { weatherTemp }
      </div>
  )
}
}
export default WeatherMain;
