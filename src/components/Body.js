import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const ButtonStyles = {
  margin: '10px',
};

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

// WRITE NEW CLASS FOR BUTTONS TO RETURN
// TEXT FROM TEXTFIELD INTO DIV
class ButtonMains extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: "",
    };


  }
}

const MainButtons = () => {
  return (
    <div>
    <Button
      id="button-load"
      variant='contained'
      className="Button"
      size='large'
      color="primary"
      style={ButtonStyles}>
        Load
        </Button>
    <Button
      id='button-reset'
      className="Button"
      variant='contained'
      size='large'
      color="secondary"
      style={ButtonStyles}>
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
        // label="City"
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
        // label="State"
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

function getInputText () {
  var input_value = document.getElementById('city').value;
  return document.getElementById('return-h1').innerHTML = input_value;
}

const ReturnSomething = () => {
  return (
    <div>
    <h1 id="return-h1">{getInputText}</h1>
    <h1></h1>
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
