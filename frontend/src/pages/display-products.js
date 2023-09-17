import React from 'react';
import { Grid, Container, Breadcrumbs, Link, Typography, Box } from '@mui/material';
// import Sidebar from '../Components/sidebar.js'; // Import your Sidebar, FilterBar, and BookList components
// import FilterBar from './FilterBar';
import Productlist from '../components/productlist';

// export default AllProducts;
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import zIndex from '@mui/material/styles/zIndex';

function MainPage() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '110vh' }}>
        <NavBar />
        <div style={{ flex: '1 0 auto' }}>
          <Productlist />
        </div>
        <div style={{ flexShrink: 0 }}>
          <Footer style={{zIndex: '1'}} />
        </div>
      </div>
    );
  }
  
  export default MainPage;




