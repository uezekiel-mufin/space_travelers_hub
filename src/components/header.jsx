/* eslint-disable operator-linebreak */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import icon from '../img/icon.png';
import { openMenu } from '../redux/slices/menu/menuSlice';
import Sidebar from './Sidebar';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.menuBar);

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

  const handleLink = () => {
    dispatch(openMenu());
  };

  const activeLink =
    location.pathname === '/'
      ? '/'
      : location.pathname.split('').slice(1).join('');
  return (
    <header className="w-full border-b mb-4">
      {menu && (
        <div className="md:hidden animate-slide-in fixed z-100  h-full w-full bg-white transition-all ease-in-out duration-500 ">
          <Sidebar links={navLinks} />
        </div>
      )}
      <div className="md:ml-4 flex justify-between content-center items-center p-5">
        <div className="flex gap-x-2 text-black">
          <Link to="/">
            <img
              src={icon}
              className="object-fill h-10 w-10"
              alt="logo"
              aria-hidden="true"
            />
          </Link>
          <h1 className="text-xl hidden md:flex font-bold">
            Space Traveler&apos;s Hub
          </h1>
        </div>

        <div className="md:flex gap-x-4 text-blue-500 hidden">
          {navLinks.map((link) => (
            <NavLink
              to={link.link}
              key={link.id}
              className={`${activeLink === link.link ? 'underline' : 'none'}`}
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
          <button
            type="button"
            className=" space-y-2 rounded shadow"
            onClick={() => handleLink()}
          >
            <AiOutlineMenuFold className="w-8 h-8" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
