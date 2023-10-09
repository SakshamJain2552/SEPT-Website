import React from 'react';
import CartPage from '../components/cart';  
import NavBar from '../components/NavBar';  
import Footer from '../components/Footer';  

function CartLayout() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '110vh' }}>
        <NavBar />
        <div style={{ flex: '1 0 auto' }}>
          <CartPage />
        </div>
        <div style={{ flexShrink: 0 }}>
          <Footer />
        </div>
      </div>
    );
}

export default CartLayout;
