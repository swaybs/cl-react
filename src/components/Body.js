import React from 'react';
import WeatherMain from './Weather';

const BodyStyle = {
  border: '2px solid #D1ADBA',
  height: '50vh',
  width: '50vw',
  margin: '0 auto',
  padding: '0',
};





const MainBody = () => {
  return (
    <div style={BodyStyle}>
      <WeatherMain />

    </div>
  )
}

export default MainBody;
