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





