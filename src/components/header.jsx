/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [mainUrl, setMainUrl] = useState('1');

  useEffect(() => {
    if (location.pathname === '/my-profile') {
      setMainUrl('My Profile');
    }
    if (location.pathname === '/missions') {
      setMainUrl('Missions');
    }
    if (location.pathname === '/') {
      setMainUrl('Rockets');
    }
  }, [location]);

  const navLinks = [
    {
      id: 1,
      name: 'Rockets',
      link: '/rockets',
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
      <div className="bg-red-500 text-[#666] shadow-xl shadow-blue-500 w-full md:bg-yellow-500 lg:bg-green-500 md:w-[89%]">
        <img src="" alt="" />
        <h2 className="text-lg md:text-2xl lg:text-4xl animate-bounce font-bold italic">
          Space Traveler&apos;s Hub
        </h2>
        <h3 className="another">Another element</h3>
      </div>
      <div>
        {navLinks.map((link) => (
          <Link
            to={link.link}
            key={link.id}
            style={{
              textDecoration: `${link.name === mainUrl ? 'underline' : 'none'}`,
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
