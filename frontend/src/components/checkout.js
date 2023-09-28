import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material';

function CheckoutPage() {
  const [address, setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [time, setTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [totalPrice, setTotalPrice] = useState(0);

  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d.toLocaleDateString();
  });

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
      localStorage.removeItem('cartItems');
    } catch (error) {
      alert("Error placing the order. Please try again later.");
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <Typography variant="h6">Total Price: ${totalPrice.toFixed(2)}</Typography>
      <br />

      <TextField
        fullWidth
        variant="outlined"
        label="Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
        margin="normal"
      />

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Date</InputLabel>
        <Select
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
          label="Date"
        >
          {availableDates.map(date => (
            <MenuItem key={date} value={date}>{date}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        variant="outlined"
        label="Time (HH:mm)"
        type="time"
        value={time}
        onChange={e => setTime(e.target.value)}
        margin="normal"
      />

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

      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
        Confirm Order
      </Button>
    </div>
  );
}

export default CheckoutPage;
