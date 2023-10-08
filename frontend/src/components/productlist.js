import React, { useState, useEffect } from 'react';
import { Grid, Pagination, useMediaQuery, useTheme } from '@mui/material';
import ProductCard from './ProductCard';
import FilterBar from './filterbar';
import axios from 'axios';
import Breadcrumb from './Breadcrumbs';
import { Drawer, List, ListItem, ListItemText, Typography} from '@mui/material';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

import { API_URL_1, API_URL_2, API_URL_3 } from './apiConfig';

const Productlist = () => {
    const itemsPerPage = 16;
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState(""); // name or price
    const [searchQuery, setSearchQuery] = useState(""); // search by name
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        axios.get(`${API_URL_2}/products`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the products", error);
            });
    }, []);

    const filteredProducts = products
        .filter(product => 
            product.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedCategory === "" || product.category.toLowerCase() === selectedCategory.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === "name") {
                return a.productName.localeCompare(b.productName);
            } else if (sortOrder === "price") {
                return b.price - a.price;
            }
            return 0;
        });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const DisplayedProducts = filteredProducts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [filteredProducts, totalPages, currentPage]);

    const handlePageChangeMUI = (event, page) => {
        setCurrentPage(page);
    };

    const countText = `${startIndex + 1} - ${Math.min(endIndex, filteredProducts.length)} of ${filteredProducts.length} results`;

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
                        height: '75vh',
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
    
    return (
        <div><div>
            {!isMobile && <Sidebar onCategoryChange={setSelectedCategory} />}
            </div>
        
        <div style={{ flex: 1, marginLeft: isMobile ? '10px' : '430px', marginRight: isMobile ? '10px' : '100px', width: isMobile ? '95%' : ''}}>
            
        
        <Breadcrumb category={selectedCategory} />
        <FilterBar onSortChange={setSortOrder} onSearchChange={setSearchQuery} />
        <p>{countText}</p>
        <Grid container spacing={2}>
            {DisplayedProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.productId}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
            <div className="pagination"  style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <Pagination
                    size="large"
                    showFirstButton showLastButton
                    count={totalPages}
                    page={currentPage}
                    variant="outlined"
                    color='primary'
                    onChange={handlePageChangeMUI}
                />
            </div>
            </div>
            </div>
    );
}

export default Productlist;
