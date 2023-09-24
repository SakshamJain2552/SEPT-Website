import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/signin'
import DisplayedProducts from './pages/display-products'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import LikedProducts from './pages/IconPages/LikedProducts';
import ProfilePage from './pages/IconPages/ProfilePage';
import CartPage from './pages/IconPages/CartPage';
import LowestPrices from './pages/ShopPages/LowestPrices';
import AllStores from './pages/StoresPages/AllStores';
import CompareStores from './pages/StoresPages/CompareStores';
import AllProducts from './pages/ShopPages/AllProducts';
import AboutAccount from './pages/AccountPages/AboutAccount';
import AccountNotifications from './pages/AccountPages/AccountNotifications';
import AboutLaura from './pages/FooterPages/AboutLaura';
import AboutLawrence from './pages/FooterPages/AboutLawrence';
import AboutSaksham from './pages/FooterPages/AboutSaksham';
import AboutHari from './pages/FooterPages/AboutHari';
import AboutLance from './pages/FooterPages/AboutLance';
import AboutDarby from './pages/FooterPages/AboutDarby';
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
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/shop/all-products' element={<AllProducts/>} />
        <Route path='/shop/lowest-prices' element={<LowestPrices/>} />
        <Route path='/stores/all-stores' element={<AllStores/>} />
        <Route path='/stores/compare-stores' element={<CompareStores/>} />
        <Route path='/account/about' element={<AboutAccount/>} />
        <Route path='/account/notifications' element={<AccountNotifications/>} />
        <Route path='/contact/laura' element={<AboutLaura/>} />
        <Route path='/contact/lawrence' element={<AboutLawrence/>} />
        <Route path='/contact/saksham' element={<AboutSaksham/>} />
        <Route path='/contact/hari' element={<AboutHari/>} />
        <Route path='/contact/lance' element={<AboutLance/>} />
        <Route path='/contact/darby' element={<AboutDarby/>} />
        <Route path='/signup' element={<SignUp/>} />

      </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
