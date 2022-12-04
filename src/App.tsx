import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      <ToastContainer autoClose={2000} />
      <AppRoutes />
    </Router>
  );
};

export default App;
