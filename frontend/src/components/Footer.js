import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'white', color: 'primary.main', py: 4 }}>
      <Container>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                    About Us
                </Typography>
                <Typography variant="subtitle1">
                <Link href="#" color="primary">
                    Aim
                </Link>
                </Typography>
                <Typography variant="subtitle1">
                <Link href="#" color="primary">
                    Vision
                </Link>
                </Typography>
                <Typography variant="subtitle1">
                <Link href="#" color="primary">
                    Testimonials
                </Link>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                    Services
                </Typography>
                <Typography variant="subtitle1">
                <Link href="#" color="primary">
                    Products
                </Link>
                </Typography>
                <Typography variant="subtitle1">
                <Link href="#" color="primary">
                    Stores
                </Link>
                </Typography>
                <Typography variant="subtitle1">
                <Link href="#" color="primary">
                    Partnerships
                </Link>
                </Typography>
                <Typography variant="subtitle1">
                <Link href="#" color="primary">
                    Careers
                </Link>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                    Contact Us
                </Typography>
                <Typography variant="subtitle1">
                <Link href="/contact/laura" color="primary">
                    Laura
                </Link> 
                </Typography>
                <Typography variant="subtitle1">
                <Link href="/contact/lawrence" color="primary">
                    Lawrence
                </Link>
                </Typography>
                <Typography variant="subtitle1">
                <Link href="/contact/saksham" color="primary">
                    Saksham
                </Link>
                </Typography>
                <Typography variant="subtitle1">
                <Link href="/contact/hari" color="primary">
                    Hari
                </Link>
                </Typography>
                <Typography variant="subtitle1">
                <Link href="/contact/lance" color="primary">
                    Lance
                </Link>
                </Typography>
                <Typography variant="subtitle1">
                <Link href="/contact/darby" color="primary">
                    Darby
                </Link>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                Social Media
                </Typography>
                <Typography variant="subtitle1">
                <Link href="#" color="primary">
                    <i className="fab fa-facebook-f" />
                    <span style={{ marginLeft: '10px' }}>Facebook</span>
                </Link>
                </Typography>
                <Typography variant="subtitle1">
                <Link href="#" color="primary">
                    <i className="fab fa-instagram" />
                    <span style={{ marginLeft: '10px' }}>Instagram</span>
                </Link>
                </Typography>
                <Typography variant="subtitle1">
                <Link href="#" color="primary">
                    <i className="fab fa-twitter" />
                    <span style={{ marginLeft: '10px' }}>Twitter</span>
                </Link>
                </Typography>
                <Typography variant="subtitle1">
                <Link href="#" color="primary">
                    <i className="fab fa-youtube" />
                    <span style={{ marginLeft: '10px' }}>Youtube</span>
                </Link>
                </Typography>
            </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
