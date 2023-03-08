import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import icon from '../img/icon.png';

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
      <div className="ml-4 flex justify-between">
        <div className="flex gap-x-2 text-black">
          <img src={icon} className="object-fill h-10 w-10" alt="" />
          <h1 className="text-xl font-bold">Space Traveler&apos;s Hub</h1>
        </div>
        <div className="flex gap-x-4 text-blue-500">
          {navLinks.map((link) => (
            <NavLink
              to={link.link}
              key={link.id}
              style={{ textDecoration: `${(link.name === mainUrl) ? 'underline' : 'none'}` }}
            >
              <span className="text-gray-500 mr-4">
                {link.name === 'My Profile' ? '|' : ''}
              </span>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
      <hr className="h-px mt-3 mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
    </header>
  );
};

export default Header;
