// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Button, Select, MenuItem } from '@mui/material';
// // import Image from "../../banana.webp";
// import { Link } from 'react-router-dom'; 

// function ProductDetail() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedPrice, setSelectedPrice] = useState(0);
//   const [quantity, setQuantity] = useState(1); // initialize quantity state

//   useEffect(() => {
//     async function fetchProductDetails() {
//       try {
//         const productResponse = await axios.get(`http://localhost:8081/products/${productId}`);
//         const productDetailsResponse = await axios.get('http://localhost:8081/products');

//         const consolidatedProduct = {
//           ...productDetailsResponse.data.find(p => p.productId === parseInt(productId)),
//           ...productResponse.data
//         };

//         setSelectedPrice(consolidatedProduct.prices[0]);
//         setProduct(consolidatedProduct);
//       } catch (error) {
//         console.error("Error fetching product details", error);
//       }
//     }

//     fetchProductDetails();
//   }, [productId]);

//   const handlePriceChange = (event) => {
//     setSelectedPrice(event.target.value);
//   };

//   // const handleAddToCart = async () => {
//   //   const userId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).UserID;
//   //   const currentDate = new Date().toLocaleDateString('en-CA');

//   //   const cartData = {
//   //     userId,
//   //     dateCreated: currentDate,
//   //     productId: product.productId,
//   //     storeName: product.storeNames[product.prices.indexOf(selectedPrice)],
//   //     quantity
//   //   };

//   //   try {
//   //     await axios.post('http://localhost:8080/user/cart', cartData);
//   //     alert('Product added to cart successfully!');
//   //   } catch (error) {
//   //     console.error('Error adding product to cart', error);
//   //     alert('Error adding product to cart. Please try again.');
//   //   }
//   // };

//   const handleAddToCart = async () => {
//     const userId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).UserID;
//     const currentDate = new Date().toLocaleDateString('en-CA');
  
//     const cartData = {
//       userId,
//       dateCreated: currentDate,
//       productId: product.productId,
//       storeName: product.storeNames[product.prices.indexOf(selectedPrice)],
//       quantity
//     };
  
//     try {
//       // Send a POST request to add the new product to the backend
//       const response = await axios.post('http://localhost:8080/user/cart', cartData);
  
//       if (response && response.data) {
//         // Add the new product data from the response to local storage
//         let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         cartItems.push(response.data);
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//       }
  
//       alert('Product added to cart successfully!');
//     } catch (error) {
//       console.error('Error adding product to cart', error);
//       alert('Error adding product to cart. Please try again.');
//     }
//   };
  
  
  

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px' }}>
//       <nav style={{ borderRadius: '5px', marginBottom: '20px', padding: '12px', backgroundColor: '#f5f5f5' }}>
//         <ol style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
//           <li>
//             <Link to="/list" style={{ textDecoration: 'none', color: 'grey', marginRight: '10px' }}>
//               All Products
//             </Link>
//           </li>
//           <li>
//             {product.productName}
//           </li>
//         </ol>
//       </nav>
//       <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
//         <div style={{ flex: '1' }}>
//           <img
//             style={{ borderRadius: '5px', width: '80%', height: '80%' }}
//             alt={product.productName}
//             src={product.imagePath}
//           />
//         </div>
//         <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
//           <h2>{product.productName}</h2>
//           <h4 style={{ color: 'grey', marginBottom: '20px' }}>${selectedPrice}</h4>
//           <div style={{ marginBottom: '10px' }}>
//             <Button variant="outlined" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
//             <span style={{ margin: '0 10px' }}>{quantity}</span>
//             <Button variant="outlined" onClick={() => setQuantity(quantity + 1)}>+</Button>
//           </div>
//           <div style={{ marginBottom: '20px' }}>
//             <Button variant="outlined" onClick={handleAddToCart}>
//               Add to Cart
//               <Select
//                 value={selectedPrice}
//                 onChange={handlePriceChange}
//                 style={{ marginLeft: '10px' }}
//               >
//                 {product.prices.map((price, index) => (
//                   <MenuItem key={index} value={price}>{`$${price} (${product.storeNames[index]})`}</MenuItem>
//                 ))}
//               </Select>
//             </Button>
//             <Button variant="contained" color="primary" style={{ marginLeft: '10px' }}>
//               Buy now
//             </Button>
//           </div>
//           <h4>Details</h4>
//           <hr />
//           <dl>
//             <dt>Product Name</dt>
//             <dd>{product.productName}</dd>

//             <dt>Category</dt>
//             <dd>{product.category}</dd>

//             <dt>Description</dt>
//             <dd>{product.description}</dd>
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Select, MenuItem, Rating } from '@mui/material';
import { Link } from 'react-router-dom'; 

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

  // useEffect(() => {
  //   async function fetchProductRating() {
  //       try {
  //           const response = await axios.get(`http://localhost:8081/products/review/${productId}`);
  //           setRating(response.data);
  //       } catch (error) {
  //           console.error("Error fetching product rating", error);
  //       }
  //   }

  //   fetchProductRating();
  // }, [productId]);

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

  // const handleRatingChange = async (event, newRating) => {
  //   const userId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).UserID;

  //   const ratingData = {
  //       userId,
  //       productId: product.productId,
  //       storeName: "CityStore North",
  //       rating: newRating
  //   };

  //   try {
  //       await axios.post('http://localhost:8081/products/review', ratingData);
  //       setRating(newRating);
  //   } catch (error) {
  //       console.error("Error posting product rating", error);
  //   }
  // };

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
    <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px' }}>
      <nav style={{ borderRadius: '5px', marginBottom: '20px', padding: '12px', backgroundColor: '#f5f5f5' }}>
        <ol style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
          <li>
            <Link to="/list" style={{ textDecoration: 'none', color: 'grey', marginRight: '10px' }}>
              All Products
            </Link>
          </li>
          <li>
            {product.productName}
          </li>
        </ol>
      </nav>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: '1' }}>
          <img
            style={{ borderRadius: '5px', width: '80%', height: '80%' }}
            alt={product.productName}
            src={product.imagePath}
          />
        </div>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <h2>{product.productName}</h2>
          <h4 style={{ color: 'grey', marginBottom: '20px' }}>${selectedPrice}</h4>
          <div style={{ marginBottom: '10px' }}>
            <Button variant="outlined" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
            <span style={{ margin: '0 10px' }}>{quantity}</span>
            <Button variant="outlined" onClick={() => setQuantity(quantity + 1)}>+</Button>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Button variant="outlined" onClick={handleAddToCart}>
              Add to Cart
              <Select
                value={selectedPrice}
                onChange={handlePriceChange}
                style={{ marginLeft: '10px' }}
              >
                {product.prices.map((price, index) => (
                  <MenuItem key={index} value={price}>{`$${price} (${product.storeNames[index]})`}</MenuItem>
                ))}
              </Select>
            </Button>
            <Button variant="contained" color="primary" style={{ marginLeft: '10px' }}>
              Buy now
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
          <h4>Details</h4>
          <hr />
          <dl>
            <dt>Product Name</dt>
            <dd>{product.productName}</dd>
            <dt>Category</dt>
            <dd>{product.category}</dd>
            <dt>Description</dt>
            <dd>{product.description}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
