import React from 'react';
import ProductDetail from '../components/productdetails'; 
import NavBar from '../components/NavBar';  
import Footer from '../components/Footer';  

function ProductPage() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '110vh' }}>
        <NavBar />
        <div style={{ flex: '1 0 auto' }}>
          <ProductDetail />
        </div>
        <div style={{ flexShrink: 0 }}>
          <Footer />
        </div>
      </div>
    );
}

export default ProductPage;
