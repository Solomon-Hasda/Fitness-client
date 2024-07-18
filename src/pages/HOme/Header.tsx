import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InterestsIcon from '@mui/icons-material/Interests'; 
import { Button, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const pages = [
  { name: 'Products', path: '/products' },
  { name: 'Manage Products', path: '/products-management' },
  { name: 'Product Details', path: '/product-details' },
  { name: 'Cart', path: '/cart' },
  { name: 'Checkout', path: '/checkout' },
  { name: 'About Us', path: '/about-us' },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="">
      <AppBar position="static" className="p-3">
        <Toolbar disableGutters>
          {/* Menu icon for small devices */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

       
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              flexGrow: { xs: 1, md: 0 },
              textAlign: { xs: 'center', md: 'left' },
              display: { xs: 'flex', md: 'none' },
              ...(location.pathname === '/' && { color: 'blue' }), // Example of active route style
            }}
          >
            MODERN FITNESS
          </Typography>

          {/* Logo and brand name for larger devices */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <InterestsIcon sx={{ mr: 1 }} /> {/* Replace Typography with icon */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
                ...(location.pathname === '/' && { color: 'blue' }), // Example of active route style
              }}
            >
              MODERN FITNESS
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  my: 2,
                  color: location.pathname === page.path ? 'blue' : 'white', // Active route style
                  display: 'block',
                }}
              >
                {page.name === 'Cart' ? <ShoppingCartIcon /> : page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        className="font-bold"
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path}>
            <Typography textAlign="center">{page.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Header;
