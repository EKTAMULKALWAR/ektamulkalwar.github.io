import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => (
  <AppBar position="sticky" className="bg-blue-700 hadow-lg py-4">
    <Toolbar className="flex justify-between">
      <Typography variant="h6" component="div">
        Ekta's Portfolio
      </Typography>
      <IconButton edge="end" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Navbar;
