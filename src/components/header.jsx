import React, { useState, useEffect, useRef } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import icon from '../img/icon.png';

const Header = () => {
  const location = useLocation();
  const catMenu = useRef(null);
  const [open, setOpen] = useState(false);
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
  const closeOpenMenus = (e) => {
    if (catMenu.current && open && !catMenu.current.contains(e.target)) {
      setOpen(false);
    }
  };

  document.addEventListener('mousedown', closeOpenMenus);

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
    <header className="w-full">
      <div className="ml-4 flex justify-between content-center items-center p-5">
        <div className="flex gap-x-2 text-black">
          <img src={icon} className="object-fill h-10 w-10" alt="" />
          <h1 className="text-xl font-bold">Space Traveler&apos;s Hub</h1>
        </div>

        <div className="md:flex gap-x-4 text-blue-500 hidden">
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

        {/* Hamburger button */}
        <div className="text-blue-500 md:hidden m-0">
          {!open
            && (
            <button
              type="button"
              className="p-3 space-y-2 bg-gray-600 rounded shadow"
              onClick={() => setOpen((prevCheck) => !prevCheck)}
            >
              <span className="block w-8 h-0.5 bg-gray-100 animate-pulse" />
              <span className="block w-8 h-0.5 bg-gray-100 animate-pulse" />
              <span className="block w-8 h-0.5 bg-gray-100 animate-pulse" />
            </button>
            )}
        </div>

      </div>
      <hr className="h-px w-full mt-3 mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
      {open
          && (
          <div ref={catMenu} className="h-full flex items-center flex-col bottom-0 w-[6rem] left-0 absolute text-white bg-black md:hidden">
            <button
              type="button"
              onClick={() => setOpen((prevCheck) => !prevCheck)}
              className="ml-12"
            >
              x
            </button>
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  to={link.link}
                  key={link.id}
                  style={{ textDecoration: `${(link.name === mainUrl) ? 'underline' : 'none'}` }}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          )}

    </header>
  );
};

export default Header;
