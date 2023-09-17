// import React from 'react';
// import { Drawer, List, ListItem, ListItemText, Checkbox, TextField, Button, Typography, Box } from '@mui/material';

// function Sidebar() {
//   const categories = ['Category 1', 'Category 2', 'Category 3'];
//   const brands = ['Brand 1', 'Brand 2', 'Brand 3'];
//   const manufacturers = ['Manufacturer 1', 'Manufacturer 2', 'Manufacturer 3'];

//   return (
    
//     <Drawer
//       variant="permanent"
//       sx={{
//           width: '20%',
          
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: '20%',
//         },
//       }}
//       >
//           <div style={{ marginLeft: '150px' }}>
//           <List>
//     <ListItem>
//       <ListItemText>
//         <Typography variant="h6" gutterBottom>
//           Browse
//         </Typography>
//       </ListItemText>
//     </ListItem>
//                   <ListItem>
//   <div className="my-2">
//     {categories.map((category, index) => (
//       <div key={index} className="mb-2">
//             <Button
//                 style={{ margin: '10px' }}
//           color='success'
//           variant="contained"
//           className="btn-sm rounded-pill"
//         >
//           {category}
//         </Button>
//       </div>
//     ))}
//   </div>
// </ListItem>

//         <ListItem>
//           <ListItemText>
//             <Typography variant="h6" gutterBottom>
//               Brands
//             </Typography>
//           </ListItemText>
//         </ListItem>
//         <ListItem>
//           <div className="d-flex flex-column">
//             {brands.map((brand, index) => (
//               <div key={index} className="form-check">
//                 <Checkbox />
//                 <label className="form-check-label">{brand}</label>
//               </div>
//             ))}
//           </div>
//         </ListItem>
//         <ListItem>
//           <ListItemText>
//             <Typography variant="h6" gutterBottom>
//               Manufacturers
//             </Typography>
//           </ListItemText>
//         </ListItem>
//         <ListItem>
//           <div className="d-flex flex-column">
//             {manufacturers.map((manufacturer, index) => (
//               <div key={index} className="form-check">
//                 <Checkbox />
//                 <label className="form-check-label">{manufacturer}</label>
//               </div>
//             ))}
//           </div>
//         </ListItem>
//         <ListItem>
//           <ListItemText>
//             <Typography variant="h6" gutterBottom>
//               Price Range
//             </Typography>
//           </ListItemText>
//         </ListItem>
//         <ListItem>
//         <Box display="flex" flexDirection="column">
//             <div className="d-flex flex-row mb-2">
//               <TextField
//                 type="text"
//                 label="Min Price"
//                 variant="outlined"
//                 defaultValue="0.1"
//                 size="small"
//                                   className="me-2"
//                                   sx={{ width: '100px' }}
//                               />
//                               <span style={{ whiteSpace: 'nowrap' }}>    _   </span>
//               <TextField
//                 type="text"
//                 label="Max Price"
//                 variant="outlined"
//                 defaultValue="500"
//                                   size="small"
//                                   sx={{ width: '100px' }}
//               />
//             </div>
//             <div style={{ marginTop: '8px', alignContent: 'center' }}>
//               <Button variant="contained" color="success">
//                 Apply
//               </Button>
//             </div>
//           </Box>

//         </ListItem>
//               </List>
//               </div>
//     </Drawer>
//   );
// }

// export default Sidebar;

// import React from 'react';
// import { Drawer, List, ListItem, ListItemText, Typography} from '@mui/material';
// import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

// function Sidebar() {
//     const categories = [
//         'Specials',
//         'Down Down',
//         'Bonus Characters',
//         'Meat & Seafood',
//         'Fruit & Vegetables',
//         'Dairy, Eggs & Fridge',
//         'Bakery',
//         'Deli',
//         'Pantry',
//         'Drinks',
//         'Frozen',
//         'Household',
//         'Health & Beauty',
//         'Baby',
//         'Pet',
//         'Liquor',
//         'Tobacco'
//     ];

//     return (

//         <Drawer
//         variant="permanent"
//         sx={{
//         width: '300px',
//             flexShrink: 0, // Ensure it doesn't shrink
//             overflowY: 'auto',
//             '& .MuiDrawer-paper': {
//             marginLeft: '100px',
//             width: '300px',
//             paddingLeft: '20px',
//             paddingRight: '20px',
//             overflowY: 'auto'
//         },
//         }}
//     >
//             <List>
//                 <ListItem>
//                     <ListItemText>
//                         <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bolder', fontFamily: 'Arial, sans-serif' }}>
//                             Search by Category
//                         </Typography>
//                     </ListItemText>
//                 </ListItem>
//                 {categories.map((category, index) => (
//                     <ListItem button key={index} sx={{ justifyContent: 'space-between', fontFamily: 'Arial, sans-serif', fontWeight: 'bolder', marginY: '15px' }}>
//                         <ListItemText primary={category} primaryTypographyProps={{ variant: 'h5' }} />
//                         <ArrowForwardIos fontSize="medium" color="action" />
//                     </ListItem>
//                 ))}
//             </List>
//         </Drawer>
//     );
// }

// export default Sidebar;

import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography} from '@mui/material';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

function Sidebar({ onCategoryChange }) {
    const categories = [
        'Fruits & Vegetables',
        'Meat & Seafood',
        'Dairy, Eggs & Fridge',
        'Bakery',
        'Deli',
        'Pantry',
        'Drinks',
        'Frozen',
        'Household',
        'Health & Beauty',
        'Baby',
        'Pet',
        'Liquor',
        'Tobacco'
    ];

    const handleCategoryClick = (category) => {
        onCategoryChange(category);
    };

    return (
        <Drawer

            sx={{
                width: '300px',
                flexShrink: 0,
                overflowY: 'auto',
                position: 'sticky',
                // marginTop: '300px',
                marginBottom: '50px',
                
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    marginTop: '150px',
                    marginLeft: '100px',
                    width: '300px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    overflowY: 'auto',
                    height: '70vh',
                    // position: 'sticky',
                    // marginBottom: '200px',
                },
            }}
            variant="permanent"
        anchor="left"
        >
            <List>
                <ListItem>
                    <ListItemText>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bolder', fontFamily: 'Arial, sans-serif' }}>
                            Search by Category
                        </Typography>
                    </ListItemText>
                </ListItem>
                {categories.map((category, index) => (
                    <ListItem 
                        button 
                        key={index} 
                        sx={{ justifyContent: 'space-between', fontFamily: 'Arial, sans-serif', fontWeight: 'bolder', marginY: '15px' }}
                        onClick={() => handleCategoryClick(category)}
                    >
                        <ListItemText primary={category} primaryTypographyProps={{ variant: 'h5' }} />
                        <ArrowForwardIos fontSize="medium" color="action" />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default Sidebar;





