/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: 'Rockets',
      link: '/',
    },
    {
      id: 2,
      name: 'Missions',
      link: 'missions',
    },
    {
      id: 3,
      name: 'My Profile',
      link: 'my-profile',
    },
  ];
  return (
    <header>
      <div>
        <img src="" alt="" />
        <h2>Space Traveler&apos;s Hub</h2>
      </div>
      <div>
        {navLinks.map((link) => (
          <Link to={link.link} key={link.id}>
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
