import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Pages/IconPages/HomePage';
import LikedProducts from './Pages/IconPages/LikedProducts';
import ProfilePage from './Pages/IconPages/ProfilePage';
import CartPage from './Pages/IconPages/CartPage';
import LowestPrices from './Pages/ShopPages/LowestPrices';
import AllStores from './Pages/StoresPages/AllStores';
import CompareStores from './Pages/StoresPages/CompareStores';
import Footer from './Components/Footer';
import AllProducts from './Pages/ShopPages/AllProducts';
import AboutAccount from './Pages/AccountPages/AboutAccount';
import AccountNotifications from './Pages/AccountPages/AccountNotifications';
import AboutLaura from './Pages/FooterPages/AboutLaura';
import AboutLawrence from './Pages/FooterPages/AboutLawrence';
import AboutSaksham from './Pages/FooterPages/AboutSaksham';
import AboutHari from './Pages/FooterPages/AboutHari';
import AboutLance from './Pages/FooterPages/AboutLance';
import AboutDarby from './Pages/FooterPages/AboutDarby';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Routes>
            <Route path='/' element={<HomePage/>} />
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
          </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
