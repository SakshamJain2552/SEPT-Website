import React from 'react';
import { Drawer, List, ListItem, ListItemText, Checkbox, TextField, Button, Typography, Box } from '@mui/material';

function Sidebar() {
  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const brands = ['Brand 1', 'Brand 2', 'Brand 3'];
  const manufacturers = ['Manufacturer 1', 'Manufacturer 2', 'Manufacturer 3'];

  return (
    
    <Drawer
      variant="permanent"
      sx={{
          width: '20%',
          
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '20%',
        },
      }}
      >
          <div style={{ marginLeft: '150px' }}>
          <List>
    <ListItem>
      <ListItemText>
        <Typography variant="h6" gutterBottom>
          Browse
        </Typography>
      </ListItemText>
    </ListItem>
    {/* <ListItem>
      <div className="my-2">
        {categories.map((category, index) => (
            <Button
                color='success'
            key={index}
            variant="contained"
            className="btn-sm rounded-pill mb-2"
          >
            {category}
          </Button>
        ))}
      </div>
    </ListItem> */}
                  
                  <ListItem>
  <div className="my-2">
    {categories.map((category, index) => (
      <div key={index} className="mb-2">
            <Button
                style={{ margin: '10px' }}
          color='success'
          variant="contained"
          className="btn-sm rounded-pill"
        >
          {category}
        </Button>
      </div>
    ))}
  </div>
</ListItem>

        <ListItem>
          <ListItemText>
            <Typography variant="h6" gutterBottom>
              Brands
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <div className="d-flex flex-column">
            {brands.map((brand, index) => (
              <div key={index} className="form-check">
                <Checkbox />
                <label className="form-check-label">{brand}</label>
              </div>
            ))}
          </div>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="h6" gutterBottom>
              Manufacturers
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <div className="d-flex flex-column">
            {manufacturers.map((manufacturer, index) => (
              <div key={index} className="form-check">
                <Checkbox />
                <label className="form-check-label">{manufacturer}</label>
              </div>
            ))}
          </div>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="h6" gutterBottom>
              Price Range
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
        <Box display="flex" flexDirection="column">
            <div className="d-flex flex-row mb-2">
              <TextField
                type="text"
                label="Min Price"
                variant="outlined"
                defaultValue="0.1"
                size="small"
                                  className="me-2"
                                  sx={{ width: '100px' }}
                              />
                              <span style={{ whiteSpace: 'nowrap' }}>    _   </span>
              <TextField
                type="text"
                label="Max Price"
                variant="outlined"
                defaultValue="500"
                                  size="small"
                                  sx={{ width: '100px' }}
              />
            </div>
            <div style={{ marginTop: '8px', alignContent: 'center' }}>
              <Button variant="contained" color="success">
                Apply
              </Button>
            </div>
          </Box>

        </ListItem>
              </List>
              </div>
    </Drawer>
  );
}

export default Sidebar;
