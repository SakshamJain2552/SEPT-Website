import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/signin'
import DisplayedProducts from './pages/display-products'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C4E15B',  // e.g., '#ff5722'
    },
    secondary: {
      main: '#50C878',   // e.g., '#f44336'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
          {/* <Route path="/" element={<SignIn />}>
          <Route index element={<BookList />} />
          <Route path="list" element={<BookList />} />
        </Route> */}

          <Route path="/" element={<SignIn />} />
          <Route path="list" element={<DisplayedProducts />} />

      </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
