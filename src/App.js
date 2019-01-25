import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar';
import MainBody from './components/Body';
import WeatherMain from './components/Weather';


// import FloatingActionButtons from './components/MainButtons';






const ButtonOne = <Button variant='contained' className="ButtonOne" size='large' color="primary">Enter</Button>;

const Divider = <div className="Divider"> </div>;

const ButtonTwo = <Button className="Button" variant='contained' size='large' color="secondary">Exit</Button>;



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
                <WeatherMain />
                {/**/}

              </div>

                {ButtonOne}
                {Divider}
                {ButtonTwo}
                {Divider}

              {/*<Button className="Button" color="primary">HELLO</Button>*/}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
