import React from 'react';
import Productlist from '../components/productlist';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MainPage() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '110vh' }}>
        <NavBar />
        <div style={{ flex: '1 0 auto' }}>
          <Productlist />
        </div>
        <div style={{ flexShrink: 0, marginLeft:'500px'}}>
          <Footer />
        </div>
      </div>
    );
  }
  
  export default MainPage;




