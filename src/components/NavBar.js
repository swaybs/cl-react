import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const NavStyle = {
  backgroundColor: '#1F3037',

};

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" style={NavStyle}>
        <Toolbar>
        <IconButton color='inherit' aria-label='Menu'>
        <MenuIcon />
        </IconButton>
          <Typography
            variant="title"
            color="inherit"
            align="center">
            Weather
          </Typography>
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar;
