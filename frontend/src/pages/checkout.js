import React from 'react';
import CheckoutPage from '../components/checkout';  
import NavBar from '../components/NavBar';  
import Footer from '../components/Footer';  

function CheckoutLayout() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '110vh' }}>
        <NavBar />
        <div style={{ flex: '1 0 auto' }}>
          <CheckoutPage />
        </div>
        <div style={{ flexShrink: 0 }}>
          <Footer />
        </div>
      </div>
    );
}

export default CheckoutLayout;
