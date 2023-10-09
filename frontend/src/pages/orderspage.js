import React from 'react';
import OrdersPage from '../components/orders';  
import NavBar from '../components/NavBar';  
import Footer from '../components/Footer';  

function OrdersLayout() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '110vh' }}>
        <NavBar />
        <div style={{ flex: '1 0 auto' }}>
          <OrdersPage />
        </div>
        <div style={{ flexShrink: 0 }}>
          <Footer />
        </div>
      </div>
    );
}

export default OrdersLayout;
