import React from 'react';
import { Grid, Container, Breadcrumbs, Link, Typography, Box } from '@mui/material';
import Sidebar from '../components/sidebar.js'; // Import your Sidebar, FilterBar, and BookList components
// import FilterBar from './FilterBar';
import Productlist from '../components/productlist.js';

// function AllProducts() {
//   return (
//         <Box display="flex">
//           <Sidebar />
//           <Box display="flex" flexDirection="column" flex={1} style={{marginRight: '100px' }}>
//             {/* <FilterBar /> */}
//             <Productlist />
//           </Box>
//         </Box>
//   );
// }

// function AllProducts() {
//     return (
//           <Box display="flex" style={{ width: '100%', minHeight: '100vh', overflowY: 'auto' }}>
//             <Sidebar />
//             <Box display="flex" flexDirection="column" flex={1} style={{ marginLeft: '20px', marginRight: '20px' }}>
//               <Productlist />
//             </Box>
//           </Box>
//     );
//   }

// function AllProducts() {
//     return (
//         //   <Box display="flex" style={{ width: '100%', minHeight: '100vh', overflowY: 'scroll' }}>
//         //     <Sidebar />
//         //     <Box display="flex" flexDirection="column" flex={1} style={{ marginLeft: '150px', marginRight: '100px', minHeight: '100vh' }}>
//               <Productlist />
//             /* </Box>
//           </Box> */
//     );
//   }
  

// export default AllProducts;
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// function MainPage() {
//   return (
//     <div>
//       <NavBar />
//       <div>
//         {/* <Sidebar /> */}
//         <Productlist />
//           </div>
//           <div>
//               <NavBar />
//           </div>
//     </div>
//   );
// }

// export default MainPage;

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




