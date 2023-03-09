import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';

const Navbar = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Navbar;
