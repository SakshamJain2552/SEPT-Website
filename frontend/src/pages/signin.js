import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import axios from 'axios';

import { API_URL_1, API_URL_2, API_URL_3 } from '../components/apiConfig';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        SuperPrice
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);  // to display error messages

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const email = data.get('email');
    const password = data.get('password');

    try {
      const response = await axios.post(`http://inc-env.eba-bxmkgzsy.us-east-1.elasticbeanstalk.com:8080/user/signin`, {
          "username": email,
          "password": password
        
      });



      if (response.data) {
        const userdata = await axios.get(`http://inc-env.eba-bxmkgzsy.us-east-1.elasticbeanstalk.com:8080/user/details?username=` + email);
        localStorage.setItem('user', JSON.stringify(userdata.data));
        navigate("/list");
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setErrorMessage('Failed to sign in. Please try again later.');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md"> {/* Increased maxWidth to "md" */}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4" sx={{ m: 2 }}> {/* Replaced Avatar with Typography */}
            {/* SuperPrice */}
            <img src={logo} alt="Logo" />
          </Typography>
          <Typography component="h2" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />

{errorMessage && (
              <Typography variant="body2" color="error" align="center" style={{ width: '100%' }}>
                {errorMessage}
              </Typography>
            )}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
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
    color: '#7F808F', // Text color
    fontWeight: 'bold', // Make the text bold
  }}
>
  Sign In
</Button>

              
              </div>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}