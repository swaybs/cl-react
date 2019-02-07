import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar';
import MainBody from './components/Body';
// import WeatherMain from './components/Weather';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <div className="Top-Nav">
            <NavBar />
          </div>
            <div className="ChildWrapper">
              <div className="mainBody">
                <MainBody />
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
