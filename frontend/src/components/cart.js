import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from './Breadcrumbs';
import { API_URL_1, API_URL_2, API_URL_3 } from './apiConfig';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartAndProducts();
  }, []);
  async function fetchCartAndProducts() {
    const userId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).UserID;
    if (userId) {
      try {
        const cartResponse = await axios.get(`${API_URL_1}/user/cart/${userId}`);
        const productResponse = await axios.get(`${API_URL_2}/products`);
        
        const detailedPrices = await Promise.all(cartResponse.data.map(async item => {
          const productDetails = await axios.get(`${API_URL_2}/products/${item.productId}`);
          const storeIndex = productDetails.data.storeNames.indexOf(item.storeName);
          return {
            productId: item.productId,
            storePrice: storeIndex !== -1 ? productDetails.data.prices[storeIndex] : null
          };
        }));
        
        const enrichedCartItems = cartResponse.data.map(item => {
          const detailedPriceInfo = detailedPrices.find(dp => dp.productId === item.productId);
          return {
            ...item,
            detailedPrice: detailedPriceInfo.storePrice
          };
        });
  
        setCartItems(enrichedCartItems);
        setProducts(productResponse.data);
      } catch (error) {
        console.error('Error fetching cart items and products', error);
      }
    }
  }  

  function updateLocalStorageCartItems(newCartItems) {
    const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));
    if (user) {
      user.cartItems = newCartItems;
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  const handleDelete = async (cartItem) => {
    const userId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).UserID;
      
    try {
      await axios.delete(`${API_URL_1}/user/cart`, {
        data: {
          userId: cartItem.userId,
          cartId: cartItem.cartId,
          cartItemId: cartItem.cartItemId
        }
      });
  
      // Update the cart items in the React state
      const updatedCartItems = cartItems.filter(item => item.cartItemId !== cartItem.cartItemId);
      setCartItems(updatedCartItems);
  
      // Update the cart items in the local storage
      let localCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const updatedLocalCartItems = localCartItems.filter(item => item.productId !== cartItem.productId || item.storeName !== cartItem.storeName);
      localStorage.setItem('cartItems', JSON.stringify(updatedLocalCartItems));
  
      // Refresh products to ensure consistency
      fetchCartAndProducts();
    } catch (error) {
      console.error('Error deleting cart item', error);
    }
  };
  
return (
  <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px', backgroundColor: '#f7f7f7' }}>
    <Breadcrumb category="Your Cart" />  {/* Add the Breadcrumb component here with the category prop */}
    <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Your Cart</h2>
    {cartItems.length === 0 ? (
      <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
    ) : (
      <div>
        {cartItems.map(item => {
          const product = products.find(p => p.productId === item.productId);
          return product ? (
            <div key={item.cartItemId} style={{ display: 'flex', backgroundColor: '#fff', margin: '10px 0', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <img src={product.imagePath} alt={product.productName} style={{ width: '180px', objectFit: 'cover' }} />
              <div style={{ flex: '1', padding: '15px' }}>
                <h4 style={{ marginBottom: '5px' }}>{product.productName}</h4>
                <p style={{ color: '#777', marginBottom: '5px' }}>Store: {item.storeName}</p>
                <p style={{ color: '#333', fontWeight: 'bold', marginBottom: '5px' }}>Price: ${item.detailedPrice}</p>
                <p style={{ color: '#777', marginBottom: '5px' }}>Quantity: {item.quantity}</p>
                <p style={{ color: '#777', marginBottom: '5px' }}>Date Added: {item.dateCreated}</p>
              </div>
              <div onClick={() => handleDelete(item)} style={{ cursor: 'pointer', padding: '15px' }}>
                <DeleteIcon style={{ color: '#f44336' }} />
              </div>
            </div>
          ) : null;
        })}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <div>
            <h3>Total: ${cartItems.reduce((total, item) => total + (item.detailedPrice * item.quantity), 0).toFixed(2)}</h3>
          </div>
          <Button variant="contained" color="primary" size="large" onClick={() => navigate('/checkout')}>
            Checkout
          </Button>
        </div>
      </div>
    )}
  </div>
);
}

export default CartPage;