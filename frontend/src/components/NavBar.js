import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tooltip, IconButton, Grid, Button, InputBase,  Menu, MenuItem, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import logo from '../pages/logo.png';


function NavBar() {
  // const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItemCount] = useState(null);
  const [shopMenuAnchor, setShopMenuAnchor] = useState(null);
  const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const hasNotifications = storedUser && storedUser.Notifications === "true";

  const handleShopMenuOpen = (event) => {
    setShopMenuAnchor(event.currentTarget);
  };


  const handleAccountMenuOpen = (event) => {
    setAccountMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setShopMenuAnchor(null);
    setAccountMenuAnchor(null);
  };
  
  return (
    <>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            {/* First Row */}
            <Grid item>
              <Typography
                color="primary"
                variant="h6"
                component={Link}
                to="/list"
                style={{
                  textDecoration: 'none',
                  fontFamily: 'Georgia',
                  letterSpacing: '2px',
                  fontWeight: 'bold',
                  fontSize: '24px',
                  color: 'primary',
                  transition: 'color 0.3s',
                }}
              >
                {/* SuperPrice */}
                <img src={logo} alt="Logo" style= {{width:'200px', height:'20%' }} />
              </Typography>
            </Grid>
            <Grid item xs>
              <div style={{ position: 'relative' }}>
                </div>
            </Grid>
            <Grid item>

        <Tooltip title={hasNotifications ? "You are subscribed to notifications" : "You are not subscribed to notifications"}>
                        <IconButton color="primary">
                          <NotificationsNoneIcon />
                        </IconButton>
                      </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="User Details">
                <IconButton color="primary" component={Link} to="/profile">
                  <AccountCircleIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Your Orders">
                <IconButton color="primary" component={Link} to="/orders">
                  <BookmarkBorderIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Shopping Cart">
                <IconButton color="primary" component={Link} to="/cart">
                  <ShoppingCartIcon />
                  {cartItemCount > 0 && (
                    <span style={{ marginLeft: '5px', fontSize: '12px' }}>{cartItemCount}</span>
                  )}
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Second Row */}
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Button color="inherit" onClick={handleShopMenuOpen}>
                Shop <KeyboardArrowDownIcon />
              </Button>
              <Menu
                anchorEl={shopMenuAnchor}
                open={Boolean(shopMenuAnchor)}
                onClose={handleMenuClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              >
                <MenuItem component={Link} to="/list" onClick={handleMenuClose}>All Products</MenuItem>
              </Menu>
            </Grid>
            <Grid item>
              <Button color="inherit" onClick={handleAccountMenuOpen}>
                Account <KeyboardArrowDownIcon />
              </Button>
              <Menu
                anchorEl={accountMenuAnchor}
                open={Boolean(accountMenuAnchor)}
                onClose={handleMenuClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              >
                <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>About Profile</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;