/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'my-profile',
        element: <MyProfile />,
      },
      {
        path: 'missions',
        element: <Missions />,
      },
      {
        path: '/rockets',
        element: <Rockets />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
