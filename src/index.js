/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import MyProfile from './components/Views/MyProfile';
import Missions from './components/Views/Missions';
import Rockets from './components/Views/Rockets';

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
        path: '/my-profile',
        element: <MyProfile />,
      },
      {
        path: '/my-profile',
        element: <Missions />,
      },
      {
        path: '/my-profile',
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
