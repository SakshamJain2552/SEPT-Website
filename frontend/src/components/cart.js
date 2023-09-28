import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // for redirecting

  useEffect(() => {
    fetchCartAndProducts();
  }, []);

  async function fetchCartAndProducts() {
    const userId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).UserID;
    if (userId) {
      try {
        const cartResponse = await axios.get(`http://localhost:8080/user/cart/${userId}`);
        const productResponse = await axios.get('http://localhost:8081/products');
        
        setCartItems(cartResponse.data);
        setProducts(productResponse.data);
      } catch (error) {
        console.error('Error fetching cart items and products', error);
      }
    }
  }

  const handleDelete = async (cartItem) => {
    const userId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).UserID;
    
    try {
      await axios.delete(`http://localhost:8080/user/cart`, {
        data: {
          userId: cartItem.userId,
          cartId: cartItem.cartId,
          cartItemId: cartItem.cartItemId
        }
      });

      // Update the cart items after successful deletion
      fetchCartAndProducts();
    } catch (error) {
      console.error('Error deleting cart item', error);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => {
            const product = products.find(p => p.productId === item.productId);
            return product ? (
              <div key={item.cartItemId} style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '15px 0' }}>
                <img src={product.imagePath} alt={product.productName} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
                <div style={{ flex: '1' }}>
                  <h4>{product.productName}</h4>
                  <p>Store: {item.storeName}</p>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Date Added: {item.dateCreated}</p>
                </div>
                <div onClick={() => handleDelete(item)} style={{ cursor: 'pointer' }}>
                  <DeleteIcon />
                </div>
              </div>
            ) : null;
          })}
          {/* Checkout Button */}
          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <Button variant="contained" color="primary" onClick={() => navigate('/checkout')}>
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
