import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Menu, MenuItem, MenuList } from '@mui/material';
import Link from '@mui/material/Link';
import { routes } from "data/routes";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#065DB4' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link href="/"><img src="/logo.jpg" alt="Supporting SC" width="270" height="120" /></Link>
      </Typography>
      <Button color="inherit"><Link href="/" sx={{ fontSize: '1.2rem', color: 'white' }}>Home</Link></Button>
        <Button color="inherit"><Link href="/about" sx={{ fontSize: '1.2rem', color: 'white' }}>About</Link></Button>
        <Button
          color="inherit"
          onMouseEnter={handleMenuOpen}
          onMouseLeave={handleMenuClose}
        >
          <Link href="/resources" sx={{ fontSize: '1.2rem', color: 'white' }}>Resources</Link>
        </Button>
          <Menu
          id="contact-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          onMouseEnter={handleMenuOpen}
          onMouseLeave={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          style={{ marginTop: '1.875em', padding: '1em' }}
          >
          <MenuList sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '1em', paddingRight: '1em', boxShadow: 'none', borderRadius: '0' }}>
          <MenuItem sx={{ borderRadius: '0' }}>
              <Link href="/region1">Region1</Link>
            </MenuItem>
            <MenuItem sx={{ borderRadius: '0' }}>
              Region2
            </MenuItem>
            <MenuItem sx={{ borderRadius: '0' }}>
              Region3
            </MenuItem>
            <MenuItem sx={{ borderRadius: '0' }}>
              Region4
            </MenuItem>
            <MenuItem sx={{ borderRadius: '0' }}>
              All Resources
            </MenuItem>
          </MenuList>
          </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;