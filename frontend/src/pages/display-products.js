import React from 'react';
import { Grid, Container, Breadcrumbs, Link, Typography, Box } from '@mui/material';
import Sidebar from '../Components/sidebar.js'; // Import your Sidebar, FilterBar, and BookList components
// import FilterBar from './FilterBar';
import Productlist from '../Components/productlist';

// export default AllProducts;
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function MainPage() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '110vh' }}>
        <NavBar />
        <div style={{ flex: '1 0 auto' }}>
          <Productlist />
        </div>
        <div style={{ flexShrink: 0 }}>
          <Footer />
        </div>
      </div>
    );
  }
  
  export default MainPage;




