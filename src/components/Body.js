import React from 'react';
import WeatherMain from './Weather';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const BodyStyle = {

  /*border: '2px solid #D1ADBA',*/
  margin: '0 auto',
  padding: '10px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginRight: '-50&',
  transform: 'translate(-50%, -50%)'
};

const InputStyle = {
  width: 'calc(200px + 2vmin)',
  position: 'relative',
  margin: '0 auto',
  padding: '20px',
};

const DividerStyle = {
  width: '20px',
  display: 'inline-block',
  position: 'relative'
};

const MainButtons = () => {
  return (
    <div>
    <Button
      variant='fab'
      className="Button"
      size='large'
      color="primary">
        Load
        </Button>
    <Button
      className="Button"
      variant='fab'
      size='large'
      color="secondary">
        Reset
        </Button>
    </div>
  );
}



const Divider = () => {
  return (
    <div></div>
  );
}


const CityInput = () => (
  <form>
    <br/>
      <TextField
        style={InputStyle}
        id="city"
        type="search"
        placeholder="City"
        helperText='Type the name of your city.'
        fullWidth
        inputProps={{
          style: { textAlign: 'center' }
        }}
        FormHelperTextProps={{
          style: { textAlign: 'center' }
        }}
        />
      <br/>
      <TextField
        style={InputStyle}
        id="state"
        type="search"
        placeholder="State"
        helperText='Type the name of state.'
        fullWidth
        inputProps={{
          style: { textAlign: 'center' }
        }}
        FormHelperTextProps={{
          style: { textAlign: 'center' }
        }}
        />
  </form>
  );



const ReturnSomething = () => {
  return (
    <div>
    <h1>Hello, text here</h1>
    <h1>Hello, text here</h1>
    </div>
  );
}




const MainBody = () => {
  return (
    <div style={BodyStyle}>
      <CityInput />
      <ReturnSomething />
      <Divider style={DividerStyle} />
      <MainButtons />
    </div>
  )
}

export default MainBody;
