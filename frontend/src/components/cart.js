// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';

// function CartPage() {
//   const [cartItems, setCartItems] = useState([]);
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate(); // for redirecting

//   useEffect(() => {
//     fetchCartAndProducts();
//   }, []);

//   async function fetchCartAndProducts() {
//     const userId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).UserID;
//     if (userId) {
//       try {
//         const cartResponse = await axios.get(`http://localhost:8080/user/cart/${userId}`);
//         const productResponse = await axios.get('http://localhost:8081/products');
        
//         setCartItems(cartResponse.data);
//         setProducts(productResponse.data);
//       } catch (error) {
//         console.error('Error fetching cart items and products', error);
//       }
//     }
//   }

//   const handleDelete = async (cartItem) => {
//     const userId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).UserID;
    
//     try {
//       await axios.delete(`http://localhost:8080/user/cart`, {
//         data: {
//           userId: cartItem.userId,
//           cartId: cartItem.cartId,
//           cartItemId: cartItem.cartItemId
//         }
//       });

//       // Update the cart items after successful deletion
//       fetchCartAndProducts();
//     } catch (error) {
//       console.error('Error deleting cart item', error);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px' }}>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cartItems.map(item => {
//             const product = products.find(p => p.productId === item.productId);
//             return product ? (
//               <div key={item.cartItemId} style={{ display: 'flex', borderBottom: '1px solid #eee', padding: '15px 0' }}>
//                 <img src={product.imagePath} alt={product.productName} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
//                 <div style={{ flex: '1' }}>
//                   <h4>{product.productName}</h4>
//                   <p>Store: {item.storeName}</p>
//                   <p>Price: ${product.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>Date Added: {item.dateCreated}</p>
//                 </div>
//                 <div onClick={() => handleDelete(item)} style={{ cursor: 'pointer' }}>
//                   <DeleteIcon />
//                 </div>
//               </div>
//             ) : null;
//           })}
//           {/* Checkout Button */}
//           <div style={{ textAlign: 'right', marginTop: '20px' }}>
//             <Button variant="contained" color="primary" onClick={() => navigate('/checkout')}>
//               Checkout
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CartPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

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
        const cartResponse = await axios.get(`http://localhost:8080/user/cart/${userId}`);
        const productResponse = await axios.get('http://localhost:8081/products');
        
        const detailedPrices = await Promise.all(cartResponse.data.map(async item => {
          const productDetails = await axios.get(`http://localhost:8081/products/${item.productId}`);
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
      await axios.delete(`http://localhost:8080/user/cart`, {
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
                <p>Price: ${item.detailedPrice}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Date Added: {item.dateCreated}</p>
              </div>
              <div onClick={() => handleDelete(item)} style={{ cursor: 'pointer' }}>
                <DeleteIcon />
              </div>
            </div>
          ) : null;
            })}
            
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