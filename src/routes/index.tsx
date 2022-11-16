import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignIn from 'pages/SignIn';
import SignUp from 'pages/Signup';
import MainPage from 'pages/MainPage';
import Tickets from 'pages/Tickets';
import Contacts from 'pages/Contacts';
import QuickAnswers from 'pages/QuickAnswers';
import Users from 'pages/Users';
import Connections from 'pages/Connections';
import Queues from 'pages/Queues';

import { Dashboard } from 'components';

const AppRoutes = () => {
  return (
    // {/*change Routes to routes file that will control private/public access*/}
    <Routes>
      <Route path="/*" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="dash" element={<Dashboard />}>
        <Route path="" element={<MainPage />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="quickAnswers" element={<QuickAnswers />} />
        <Route path="users" element={<Users />} />
        <Route path="connections" element={<Connections />} />
        <Route path="queues" element={<Queues />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
