import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
