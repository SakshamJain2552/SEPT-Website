import React from 'react';
import ProfilePage from '../../components/profile';  
import NavBar from '../../components/NavBar';  
import Footer from '../../components/Footer';  

function ProfileLayout() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '110vh' }}>
        <NavBar />
        <div style={{ flex: '1 0 auto' }}>
          <ProfilePage />
        </div>
        <div style={{ flexShrink: 0 }}>
          <Footer />
        </div>
      </div>
    );
}

export default ProfileLayout;
