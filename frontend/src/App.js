import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProfilePage from './Pages/ProfilePage';
import CartPage from './Pages/CartPage';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';


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
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
