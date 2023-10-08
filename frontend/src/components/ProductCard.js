import React from 'react';
import axios from 'axios'; // <-- Import axios
import { Card, CardContent, CardHeader, Typography, CardActionArea, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import image from './288-2881831_grey-food-icon-png-transparent-png.png';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { API_URL_1, API_URL_2, API_URL_3 } from './apiConfig';

export default function ActionAreaCard({ product }) {

  const handleAddToCart = async () => {
    const userId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).UserID;
    const currentDate = new Date().toLocaleDateString('en-CA');
  
    const cartData = {
      userId,
      dateCreated: currentDate,
      productId: product.productId,
      storeName: product.storeName, // Assuming each product has a storeName property
      quantity: 1 // Assuming a default quantity of 1 for the ProductCard
    };

    // Check if product from the same store is already in the cart
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (cartItems.some(item => item.productId === cartData.productId && item.storeName === cartData.storeName)) {
      alert("Product already in Cart, Please delete it first to complete this action");
      return;
    }

    try {
      const response = await axios.post(`${API_URL_1}/user/cart`, cartData);
      if (response && response.data) {
        cartItems.push(response.data);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert('Product added to cart successfully!');
      }
    } catch (error) {
      console.error('Error adding product to cart', error);
      alert('Error adding product to cart. Please try again.');
    }
  };

  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Link to={`/product/${product.productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardActionArea style={{ flexGrow: 1 }}>
          <CardMedia component="img" sx={{ height: 300 }} image={product.imagePath} title="Product Name" />
          <CardHeader title={product.productName} subheader={`Store name: ${product.storeName}`} />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {product.description}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Lowest Price:</strong> <span style={{ fontWeight: 'bold' }}>{product.price}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <div style={{ marginTop: 'auto', padding: '8px', textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ShoppingCartIcon />}
          style={{ borderRadius: '50px', marginBottom: '4px' }}
          onClick={handleAddToCart} // <-- Add this line
        >
          Add to Cart
        </Button>
        <Typography variant="body2" color="textSecondary">
          <CheckIcon style={{ color: 'green' }} /> In Stock
        </Typography>
      </div>
    </Card>
  );
}

