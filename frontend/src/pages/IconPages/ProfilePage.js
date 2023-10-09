import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();

export default function ProfilePage() {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [showCardDetails, setShowCardDetails] = useState(false);

  // Retrieve the user object from local storage
  const storedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        // Extract the username from the stored user object
        const storedUsername = storedUser.Username; // Use the correct property name
        const response = await axios.get(`http://localhost:8080/user/details?username=${storedUsername}`);
        setUserDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }

    fetchUserDetails();
  }, [storedUser]);

  const toggleCardDetails = () => {
    setShowCardDetails((prevShowCardDetails) => !prevShowCardDetails);
  };
  

  if (loading) {
    return (
      <Container maxWidth="md" style={{ marginTop: '8rem', textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" align="center" gutterBottom>
          User Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="firstname">
              First Name: {userDetails.FirstName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="lastname">
              Last Name: {userDetails.LastName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="username">
              Username: {userDetails.Username}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="email">
              Email: {userDetails.Email}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="password">
              Password: {userDetails.Password}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="address">
              Address: {userDetails.Address}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="notifications">
              Notifications: {userDetails.Notifications ? 'Yes' : 'No'}
            </Typography>
          </Grid>
        </Grid>
        
        <Typography variant="h6" align="center" style={{ marginTop: '2rem' }}>
          Card Details:
        </Typography>
        
        {showCardDetails ? (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
                Card Name: {userDetails.CardName}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
                Card Number: {userDetails.CardNumber}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
                Card Expiration Date: {userDetails.CardExpiration}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
                Card CVV: {userDetails.CardCVV}
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Button variant="outlined" color="primary" onClick={toggleCardDetails}>
              View Card Information
            </Button>
          </div>
        )}
      </Paper>
    </Container>
    </ThemeProvider>
  );
}
