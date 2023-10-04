import React from 'react';
import CheckoutPage from '../components/checkout';  // Adjust the path as necessary
import NavBar from '../components/NavBar';  // Adjust the path as necessary
import Footer from '../components/Footer';  // Adjust the path as necessary

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
