import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

export default function UserDetails() {
  const { userId } = useParams(); // Assuming you have a route parameter for the user ID
  const [userDetails, setUserDetails] = useState(null);

  // Simulating fetching user details from the backend
  useEffect(() => {
    // Replace this with actual API request to fetch user details by ID
    // Example fetch:
    fetch(`http://example.com/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserDetails(data))
      .catch((error) => console.error('Error fetching user details:', error));
  }, [userId]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        User Details
      </Typography>
      {userDetails ? (
        <div>
          <Typography variant="h6">User ID: {userDetails.id}</Typography>
          <Typography>Name: {userDetails.name}</Typography>
          <Typography>Email: {userDetails.email}</Typography>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <Typography>Loading user details...</Typography>
      )}
    </Container>
  );
}