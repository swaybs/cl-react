import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// NavBar Styles
const NavStyle = {
  // backgroundColor: '#1F3037',
  background: 'linear-gradient(135deg, #171A1F 60%, #5D151D 100%)',

};

const MenuButtonStyle = {
  color: 'white',
};

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          style={MenuButtonStyle}
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Search People</MenuItem>
          <MenuItem onClick={this.handleClose}>Search Planets</MenuItem>
          <MenuItem onClick={this.handleClose}>Search Ships</MenuItem>
        </Menu>
      </div>
    );
  }
}

// Build Navbar to be used as a componentt
const NavBar = () => {
  return (
    <div>
      <AppBar
        position="static"
        style={NavStyle}
        // change this stupid line to make it work
        title={<img alt="" src="https://img.icons8.com/ios/24/000000/star-wars.png" />}>
        <Toolbar>
        <IconButton color='inherit' aria-label='Menu'>
          {/* Burger Icon Component */}
        <MenuIcon />
        </IconButton>
        <SimpleMenu />

          <Typography
            variant="title"
            color="inherit"
            align="center">
            {/* Star Wars */}
          </Typography>
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar;
