import React, { Component } from 'react';
import $ from 'jquery';




const WeatherStyles = {
  height: '70%',
  width: '70%',
  margin: '0 auto',
  top: '50%',

  padding: '20px',
  position: 'relative',
};

class WeatherMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      list: []
    };
  }

  ComponentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=48.13&lon=17.12&APPID=9f5bb0e59666b25f60b642b8e0dd3c66')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.list
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, list } = this.state;
    if (error) {
      return <div style={WeatherStyles}>
              <strong>Error: {error.message}</strong>
             </div>;
    } else if (!isLoaded) {
      return <div style={WeatherStyles}>
              <strong>Loading...</strong>
             </div>;
    } else {
      return (
        <ul>
        {list.map(list => (
          <li key={list.main}>
            {list.main[2]}
          </li>
        ))}
        </ul>
      );
    }
  }
}


export default WeatherMain;
