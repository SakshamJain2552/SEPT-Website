import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Select, MenuItem, Rating } from '@mui/material';
import { Link } from 'react-router-dom'; 
import Breadcrumb from './Breadcrumbs';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const productResponse = await axios.get(`http://localhost:8081/products/${productId}`);
        const productDetailsResponse = await axios.get('http://localhost:8081/products');

        const consolidatedProduct = {
          ...productDetailsResponse.data.find(p => p.productId === parseInt(productId)),
          ...productResponse.data
        };

        setSelectedPrice(consolidatedProduct.prices[0]);
        setProduct(consolidatedProduct);
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    }

    fetchProductDetails();
  }, [productId]);

  const fetchProductRating = async () => {
    try {
        const response = await axios.get(`http://localhost:8081/products/review/${productId}`);
        setRating(response.data);
    } catch (error) {
        console.error("Error fetching product rating", error);
    }
  };

  useEffect(() => {
    fetchProductRating();
  }, [productId]);



  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleRatingChange = async (event, newRating) => {
    const userId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).UserID;

    const ratingData = {
        userId,
        productId: product.productId,
        storeName: "CityStore North",
        rating: newRating
    };

    try {
        await axios.post('http://localhost:8081/products/review', ratingData);
        fetchProductRating(); // Refetch the rating after posting
    } catch (error) {
        console.error("Error posting product rating", error);
    }
  };

  const handleAddToCart = async () => {
    const userId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).UserID;
    const currentDate = new Date().toLocaleDateString('en-CA');
  
    const cartData = {
      userId,
      dateCreated: currentDate,
      productId: product.productId,
      storeName: product.storeNames[product.prices.indexOf(selectedPrice)],
      quantity
    };
  
    try {
      const response = await axios.post('http://localhost:8080/user/cart', cartData);
      if (response && response.data) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(response.data);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }
      alert('Product added to cart successfully!');
    } catch (error) {
      console.error('Error adding product to cart', error);
      alert('Error adding product to cart. Please try again.');
    }
  };

  if (!product) return <p>Loading...</p>;

return (
  <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
    {/* <nav style={{ borderRadius: '5px', marginBottom: '20px', padding: '12px', backgroundColor: '#f5f5f5' }}>
      <ol style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/list" style={{ textDecoration: 'none', color: 'grey', marginRight: '10px' }}>
            All Products
          </Link>
        </li>
        <li>{product.productName}</li>
      </ol>
    </nav> */}
    <Breadcrumb category={product.productName} /> {/* Use the Breadcrumb component instead of the old breadcrumbs */}
    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
      <div style={{ flex: '1' }}>
        <img
          style={{ borderRadius: '5px', maxWidth: '100%', objectFit: 'cover' }}
          alt={product.productName}
          src={product.imagePath}
        />
      </div>
      <div style={{ flex: '2', display: 'flex', flexDirection: 'column' }}>
        <h2>{product.productName}</h2>
        <h4 style={{ color: 'grey', marginBottom: '20px' }}>${selectedPrice}</h4>
        <div style={{ marginBottom: '10px' }}>
          <Button variant="outlined" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
          <span style={{ margin: '0 10px' }}>{quantity}</span>
          <Button variant="outlined" onClick={() => setQuantity(quantity + 1)}>+</Button>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Select
            value={selectedPrice}
            onChange={handlePriceChange}
            variant="outlined"
            style={{ marginRight: '10px' }}
          >
            {product.prices.map((price, index) => (
              <MenuItem key={index} value={price}>{`$${price} (${product.storeNames[index]})`}</MenuItem>
            ))}
          </Select>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h4>User Rating:</h4>
          <Rating 
            name="product-rating" 
            value={rating} 
            onChange={handleRatingChange} 
            precision={1}
          />
        </div>
        <div style={{ marginBottom: '20px', marginTop: '20px', padding: '20px', borderRadius: '5px', backgroundColor: '#f5f5f5', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h4 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>Details</h4>
          <dl style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', fontSize: '16px' }}>
            <dt style={{ fontWeight: 'bold', color: '#555' }}>Product Name</dt>
            <dd style={{ color: '#777' }}>{product.productName}</dd>
            <dt style={{ fontWeight: 'bold', color: '#555' }}>Category</dt>
            <dd style={{ color: '#777' }}>{product.category}</dd>
            <dt style={{ fontWeight: 'bold', color: '#555' }}>Description</dt>
            <dd style={{ color: '#777' }}>{product.description}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
);
}

export default ProductDetail;