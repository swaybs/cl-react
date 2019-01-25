import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavStyle = {
  backgroundColor: '#1F3037',
};

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" style={NavStyle}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            Weather
          </Typography>
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar;
