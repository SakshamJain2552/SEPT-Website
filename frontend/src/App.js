import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/signin'
import DisplayedProducts from './pages/display-products'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LikedProducts from './pages/IconPages/LikedProducts';
import ProfilePage from './pages/IconPages/ProfilePage';
import AboutAccount from './pages/AccountPages/AboutAccount';
import AboutLaura from './pages/FooterPages/AboutLaura';
import AboutLawrence from './pages/FooterPages/AboutLawrence';
import AboutSaksham from './pages/FooterPages/AboutSaksham';
import AboutHari from './pages/FooterPages/AboutHari';
import AboutLance from './pages/FooterPages/AboutLance';
import ProductDetail from './pages/product-details'; 
import CartPage from './pages/cart';
import Checkout from './pages/checkout';
import SignUp from './pages/signup';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C4E15B',  // e.g., '#ff5722'
    },
    secondary: {
      main: '#50C878',   // e.g., '#f44336'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="list" element={<DisplayedProducts />} />
        <Route path='/liked-products' element={<LikedProducts/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        {/* <Route path='/cart' element={<CartPage/>} /> */}
        <Route path='/account/about' element={<AboutAccount/>} />
        <Route path='/contact/laura' element={<AboutLaura/>} />
        <Route path='/contact/lawrence' element={<AboutLawrence/>} />
        <Route path='/contact/saksham' element={<AboutSaksham/>} />
        <Route path='/contact/hari' element={<AboutHari/>} />
        <Route path='/contact/lance' element={<AboutLance/>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<Checkout />} />

      </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
