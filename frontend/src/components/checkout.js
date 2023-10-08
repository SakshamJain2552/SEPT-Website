import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Typography, Card, CardContent } from '@mui/material';
import Breadcrumb from './Breadcrumbs';

import { Modal, Box, CircularProgress } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { API_URL_1, API_URL_2, API_URL_3 } from './apiConfig';

import { Link } from 'react-router-dom';


function CheckoutPage() {
  const [address, setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [time, setTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [totalPrice, setTotalPrice] = useState(0);

  const [cardNumberHelperText, setCardNumberHelperText] = useState('');
const [cvvHelperText, setCvvHelperText] = useState('');

  const [cardNumber, setCardNumber] = useState('');
const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');


  const [isModalOpen, setIsModalOpen] = useState(false);
const [responseMessage, setResponseMessage] = useState('');


  useEffect(() => {
    calculateTotalPrice();
  }, []);

  const calculateTotalPrice = async () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let total = 0;

    for (let item of cartItems) {
      const productData = await axios.get(`${API_URL_2}/products/${item.productId}`);
      const priceIndex = productData.data.storeNames.findIndex(store => store === item.storeName);
      total += productData.data.prices[priceIndex] * item.quantity;
    }

    setTotalPrice(total);
  };


  const handleSubmit = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const payload = {
        username: userData.Username,
        address,
        date: selectedDate,
        time,
        paymentMethod
    };

    try {
        const response = await axios.post(`${API_URL_3}/delivery/setDelivery`, payload);
        setResponseMessage(response.data.message || "Order placed successfully!"); // Assuming the response has a message property
        setIsModalOpen(true);
    } catch (error) {
        alert("Error placing the order. Please try again later.");
    }
};



  const isFormComplete = address && selectedDate && time &&
    (paymentMethod === 'cash' || 
      (paymentMethod === 'card' && cardNumber && expiryDate && cvv));
  
  
      const handleCardNumberChange = (e) => {
        const value = e.target.value;
        if (value.length <= 16) {
            setCardNumber(value);
            if (value.length !== 16) {
                setCardNumberHelperText(`Enter exactly 16 numbers. Currently: ${value.length}`);
            } else {
                setCardNumberHelperText('');
            }
        }
    };
    
    const handleCvvChange = (e) => {
        const value = e.target.value;
        if (value.length <= 3) {
            setCvv(value);
            if (value.length !== 3) {
                setCvvHelperText(`Enter exactly 3 numbers. Currently: ${value.length}`);
            } else {
                setCvvHelperText('');
            }
        }
    };
  
  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '20px' }}>
      <Breadcrumb category="Checkout" />
        <Typography variant="h4" gutterBottom align="center">Checkout</Typography>

        <Card style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="h5" gutterBottom>Shipping Details</Typography>

            <TextField
                fullWidth
                variant="outlined"
                label="Address"
                value={address}
                onChange={e => setAddress(e.target.value)}
                margin="normal"
            />

            <TextField
                fullWidth
                variant="outlined"
                label="Date"
                type="date"
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            {/* <TextField
                fullWidth
                variant="outlined"
                label="Time (HH:mm)"
                type="time"
                value={time}
                onChange={e => setTime(e.target.value)}
                margin="normal"
            /> */}
        
        <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel>Time Range</InputLabel>
                <Select
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    label="Time Range"
                >
                    {Array.from({ length: 24 }).map((_, index) => (
                        <MenuItem key={index} value={`${index}:00-${index + 1}:00`}>
                            {`${index}:00-${index + 1}:00`}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Card>

        <Card style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="h5" gutterBottom>Payment Details</Typography>

            <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel>Payment Method</InputLabel>
                <Select
                    value={paymentMethod}
                    onChange={e => setPaymentMethod(e.target.value)}
                    label="Payment Method"
                >
                    <MenuItem value="card">Card</MenuItem>
                    <MenuItem value="cash">Cash</MenuItem>
                </Select>
            </FormControl>

            {paymentMethod === 'card' && (
                <div>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Card Number"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        margin="normal"
                        type="number"
                        helperText={cardNumberHelperText}
                        error={cardNumber.length !== 16}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Expiry Date"
                        value={expiryDate}
                        onChange={e => setExpiryDate(e.target.value)}
                        margin="normal"
                        type="text"
                        placeholder="MM/YY"
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="CVV"
                        value={cvv}
                        onChange={handleCvvChange}
                        margin="normal"
                        type="number"
                        helperText={cvvHelperText}
                        error={cvv.length !== 3}
                    />
                </div>
            )}

            <Typography variant="h6" style={{ marginTop: '20px' }}>
                Total Price: ${totalPrice.toFixed(2)}
            </Typography>
        </Card>

        <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            onClick={handleSubmit}
            disabled={!isFormComplete}
        >
            Confirm Order
      </Button>
      
      {/* <Modal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Box
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                    textAlign: 'center'
                }}
            >
                <CheckCircleOutlineIcon style={{ color: 'green', fontSize: 60, animation: 'spin 1s linear infinite' }} />
                <Typography variant="h6" id="modal-title">
                    {responseMessage}
                </Typography>
            </Box>
        </Modal>
         */}
      
      <Modal
    open={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
>
    <Box
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            textAlign: 'center'
        }}
    >
<CheckCircleOutlineIcon 
    sx={{
        color: 'green',
        fontSize: 60,
        animation: 'fadeIn 2s ease-in-out 0s 1, fadeOut 1s ease-in-out 5s 1',
        '@keyframes fadeIn': {
            '0%': {
                opacity: 0,
            },
            '100%': {
                opacity: 1,
            },
        },
        '@keyframes fadeOut': {
            '0%': {
                opacity: 1,
            },
            '100%': {
                opacity: 0,
            },
        },
    }}
/>
                <Typography variant="h6" id="modal-title">
            Order placed successfully!
        </Typography>
        <Button 
            variant="contained" 
            color="primary" 
            component={Link} 
            to="/orders"
            fullWidth
        >
            Go to Your Order List
        </Button>

    </Box>
</Modal>



    </div>
);
}

export default CheckoutPage;
