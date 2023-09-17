import React, { useState } from 'react';
import { Paper, TextField, IconButton, Box, InputLabel, FormControl, MenuItem, Select } from '@mui/material';
import { Search } from '@mui/icons-material';

function FilterBar({ onSortChange, onSearchChange }) {
  const [sortType, setSortType] = useState('');

  const handleSortChange = (event) => {
    setSortType(event.target.value);
    onSortChange(event.target.value);
  };

  return (
    <Paper elevation={3} sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="sort-select-label">Sort By</InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={sortType}
            label="Sort By"
            onChange={handleSortChange}
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="price">Price</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
      <div>
        <TextField
          type="text"
          placeholder="Search by name..."
          variant="outlined"
          onChange={event => onSearchChange(event.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton size="large" color="inherit">
                <Search />
              </IconButton>
            ),
          }}
        />
      </div>
    </Paper>
  );
}

export default FilterBar;