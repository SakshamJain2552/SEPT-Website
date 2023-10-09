import React, { useState, useEffect } from 'react';
import { Paper, Typography, Grid, Divider, Box, Container } from '@mui/material';
import { styled } from '@mui/system';
import Breadcrumb from './Breadcrumbs';

const StyledPaper = styled(Paper)({
  padding: '20px',
  marginBottom: '30px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
});

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const username = JSON.parse(localStorage.getItem('user')).Username;

  useEffect(() => {
    fetch(`http://localhost:8082/delivery/username/${username}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          console.error('Received non-array data:', data);
          setOrders([]); // set orders to an empty array if the data is not an array
        }
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, [username]);

  return (
    <Container maxWidth="lg">
      <Breadcrumb category="Your Orders" />
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="textPrimary" align="center">
          Your Orders
        </Typography>
      </Box>

      {Array.isArray(orders) && orders.map(order => (
        <StyledPaper key={order.deliveryID}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            Order ID: {order.deliveryID}
          </Typography>
          <Divider style={{ marginBottom: '20px' }} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>Delivery Details:</Typography>
              <Typography>Address: {order.address}</Typography>
              <Typography>Delivery Date: {order.deliveryDate}</Typography>
              <Typography>Delivery Time: {order.deliveryTime}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom>Payment:</Typography>
              <Typography>Method: {order.paymentMethod}</Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      ))}

      {orders.length === 0 && (
        <Typography variant="subtitle1" align="center">
          You have no orders at the moment.
        </Typography>
      )}
    </Container>
  );
}

export default OrdersPage;