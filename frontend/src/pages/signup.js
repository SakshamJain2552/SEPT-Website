import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    notifications: '',
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
    cardCVV: ''
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const temp = {firstname: formData.firstname, lastname: formData.lastname, username: formData.username, email: formData.email, password: formData.password,
        notifications: formData.notifications, cardName: formData.cardName, cardNumber: formData.cardNumber, cardExpiration: formData.cardExpiration, cardCVV: formData.cardCVV};
    temp[name] = value;
    setFormData(temp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   // Check if any of the required fields are empty
    if ( !formData.firstname || !formData.lastname || !formData.username || !formData.email || !formData.password || !formData.notifications || !formData.cardName || !formData.cardNumber || !formData.cardExpiration || !formData.cardCVV) {
        setErrorMessage('Please fill in all the required fields.');
        return; // Prevent form submission
    }
    
    try {
      
        const response = await axios.post('http://localhost:8080/user/signup', {
            "firstname": formData.firstname,
            "lastname": formData.lastname,
            "username": formData.username,
            "email": formData.email,
            "password": formData.password,
            "notifications": formData.notifications,
            "cardName": formData.cardName,
            "cardNumber": formData.cardNumber,
            "cardExpiration": formData.cardExpiration,
            "cardCVV": formData.cardCVV
      });
    //   console.log('Registration successful:', response.data);
      if (response.data) {
        navigate('/'); // Redirect to the signin page after successful signup
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMessage('Failed to register. Please try again later.', error.message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4" sx={{ m: 2 }}>
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  name="firstname"
                  autoComplete="firstname"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="lastname"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="notifications"
                  label="Notifications (y or n)"
                  name="notifications"
                  autoComplete="notifications"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="cardName"
                  label="Card Name"
                  type="cardName"
                  id="cardName"
                  autoComplete="cardName"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="cardNumber"
                  label="Card Number"
                  type="cardNumber"
                  id="cardNumber"
                  autoComplete="cardNumber"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="cardExpiration"
                  label="Card Expiration Date (mm/yy)"
                  type="cardExpiration"
                  id="cardExpiration"
                  autoComplete="cardExpiration"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="cardCVV"
                  label="CVV"
                  type="cardCVV"
                  id="cardCVV"
                  autoComplete="cardCVV"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            {errorMessage && (
              <Typography variant="body2" color="error" align="center" style={{ width: '100%' }}>
                {errorMessage}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: '#C4E15B',
                borderRadius: '20px',
                height: '50px',
                width: '500px',
                color: '#7F808F',
                fontWeight: 'bold',
              }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}