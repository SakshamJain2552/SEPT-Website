import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Typography, Card, CardContent } from '@mui/material';
import Breadcrumb from './Breadcrumbs';

function CheckoutPage() {
  const [address, setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [time, setTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [totalPrice, setTotalPrice] = useState(0);

  const [cardNumber, setCardNumber] = useState('');
const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  useEffect(() => {
    calculateTotalPrice();
  }, []);

  const calculateTotalPrice = async () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let total = 0;

    for (let item of cartItems) {
      const productData = await axios.get(`http://localhost:8081/products/${item.productId}`);
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
      await axios.post('http://localhost:8082/delivery/setDelivery', payload);
      alert("Order placed successfully!");
    } catch (error) {
      alert("Error placing the order. Please try again later.");
    }
    };


  const isFormComplete = address && selectedDate && time &&
    (paymentMethod === 'cash' || 
     (paymentMethod === 'card' && cardNumber && expiryDate && cvv));
  
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

            <TextField
                fullWidth
                variant="outlined"
                label="Time (HH:mm)"
                type="time"
                value={time}
                onChange={e => setTime(e.target.value)}
                margin="normal"
            />
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
                        onChange={e => setCardNumber(e.target.value)}
                        margin="normal"
                        type="number"
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
                        onChange={e => setCvv(e.target.value)}
                        margin="normal"
                        type="number"
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
    </div>
);
}

export default CheckoutPage;
