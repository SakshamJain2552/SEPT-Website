import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const SignUpHeading = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: bold;
  font-size: 24px;
`;

export default function SignUp() {
  const navigate = useNavigate(); // Use useNavigate

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your sign-up logic here using the formData state
    console.log('Form Data:', formData);

    // Redirect to the home page (/list) after successful sign-up
    navigate('/list');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <SignUpHeading variant="h5">Sign Up</SignUpHeading>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Link to="/">Already have an account? Sign In</Link>
        </Grid>
      </Grid>
    </Container>
  );
}