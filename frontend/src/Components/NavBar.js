import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, InputBase } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function NavBar() {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="primary" variant="h6" component={Link} to="/" style={{ textDecoration: 'none'}}>
            SuperPrice
          </Typography>
          <div style={{ flex: 1, marginLeft: 'auto' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 50, top: '50%', transform: 'translateY(-50%)' }}>
                <SearchIcon color="primary">
                </SearchIcon>
              </div>
              <InputBase
                placeholder="Search..."
                fullWidth
                inputProps={{ 'aria-label': 'search' }}
                style={{ left: 50, paddingLeft: 40 }}
              />
            </div>
          </div>
          <div>
            <Button color="primary" component={Link} to="/about">
              About
            </Button>
            <Button color="primary" component={Link} to="/profile">
              Profile
            </Button>
            <Button color="primary" component={Link} to="/cart">
              Cart
            </Button>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} to="/Category1" onClick={handleMenuClose}>
                Category 1
              </MenuItem>
              <MenuItem component={Link} to="/Category2" onClick={handleMenuClose}>
                Category 2
              </MenuItem>
              <MenuItem component={Link} to="/Category3" onClick={handleMenuClose}>
                Category 3
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;



// function NavBar() {
//     const [menuAnchor, setMenuAnchor] = useState(null);

//     const handleMenuOpen = (event) => {
//     setMenuAnchor(event.currentTarget);
//     };

//     const handleMenuClose = () => {
//     setMenuAnchor(null);
//     };
//     return (
//         <>
//       <AppBar position="static" color="inherit">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="success"
//             aria-label="menu"
//             onClick={handleMenuOpen} // Open the menu when the icon is clicked
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography color="green" variant="h6" component={Link} to="/" style={{ textDecoration: 'none'}}>
//             SuperPrice
//           </Typography>
//           <div style={{ marginLeft: 'auto' }}>
//             <Button color="success" component={Link} to="/about">
//               About
//             </Button>
//             <Button color="success" component={Link} to="/profile">
//               Profile
//             </Button>
//             <Button color="success" component={Link} to="/cart">
//               Cart
//             </Button>
//           </div>
//         </Toolbar>
//       </AppBar>

//       <Menu
//         anchorEl={menuAnchor}
//         open={Boolean(menuAnchor)} // Open the menu when menuAnchor is not null
//         onClose={handleMenuClose} // Close the menu when an item is clicked or when clicking outside
//       >
//         <MenuItem component={Link} to="/Category1" onClick={handleMenuClose}>Cagegory 1</MenuItem>
//         <MenuItem component={Link} to="/Category2" onClick={handleMenuClose}>Cagegory 2</MenuItem>
//         <MenuItem component={Link} to="/Category3" onClick={handleMenuClose}>Cagegory 3</MenuItem>
//       </Menu>
//     </>
      
//   );
// }

// export default NavBar;