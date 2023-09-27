import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const headingStyle = {
  fontSize: '24px', // Adjust the font size as needed
  fontWeight: 'bold', // Make the text bold
  marginBottom: '20px', // Add some spacing below the heading
};

function UserDetails() {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'currentUsername' with the actual username of the current user
    const currentUsername = 'exampleUsername'; // You should get this from your authentication system

    axios.get(`http://localhost:8080/user/details?username=${currentUsername}`)
      .then((response) => {
        setUserDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5" style={headingStyle}>
          User Details
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Username"
          value={userDetails.username}
          InputProps={{
            readOnly: true,
          }}
        />
         <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Name"
          value={userDetails.name}
          InputProps={{
            readOnly: true,
          }}
        />
         <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Last name"
          value={userDetails.lastname}
          InputProps={{
            readOnly: true,
          }}
        />
         <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Password"
          value={userDetails.password}
          InputProps={{
            readOnly: true,
          }}
        />
        {/* Add more user details fields */}
        <Button
          type="button"
          variant="contained"
          color="primary"
          fullWidth
        >
          Edit Details
        </Button>
      </div>
    </Container>
  );
}

export default UserDetails;