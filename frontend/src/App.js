import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProfilePage from './Pages/ProfilePage';
import CartPage from './Pages/CartPage';
import Category1 from './Pages/Category1';
import Category2 from './Pages/Category2';
import Category3 from './Pages/Category3';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/category1' element={<Category1/>} />
            <Route path='/category2' element={<Category2/>} />
            <Route path='/category3' element={<Category3/>} />
          </Routes>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;
