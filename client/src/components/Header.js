import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const logout = async (e) => {
    e.preventDefault();

    await axios.get('/user/logout');

    props.setState((oldState) => {
      return {
        ...oldState,
        user: null,
      };
    });
  };

  return (
    <header className="flex justify-between items-center p-4">
      <NavLink to="/" className="header-title-link">
        <h1 className="text-center text-lg font-semibold">Good Vibes Feed</h1>
      </NavLink>

      <button
        className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <nav className="hidden lg:flex space-x-6">
        {props.state.user && (
          <p className="header-username">Welcome, {props.state.user.username}</p>
        )}
        <NavLink
          className="transition duration-300 hover:text-blue-600"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="transition duration-300 hover:text-blue-600"
          to="/support"
        >
          Support Us
        </NavLink>
        {props.state.user ? (
          <>
            {/* <NavLink className="transition duration-300 hover:text-blue-600" to="/dashboard">Dashboard</NavLink> */}
            <NavLink
              className="transition duration-300 hover:text-blue-600"
              onClick={logout}
              to="/logout"
            >
              Log Out
            </NavLink>
          </>
        ) : (
          <NavLink
            className="transition duration-300 hover:text-blue-600"
            to="/auth"
          >
            Login or Register
          </NavLink>
        )}
      </nav>

      <nav
        className={`${
          isMenuOpen ? 'right-0' : '-right-full'
        } fixed top-0 h-full bg-blue-100 w-1/3 lg:w-1/4 p-8 transition-transform duration-300 transform ease-in-out lg:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={closeMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="space-y-2">
          {props.state.user && (
            <p className="header-username">Welcome, {props.state.user.username}</p>
          )}
          <NavLink
            className="block transition duration-300 hover:text-blue-600"
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            className="block transition duration-300 hover:text-blue-600"
            to="/support"
            onClick={closeMenu}
          >
            Support Us
          </NavLink>
          {props.state.user ? (
            <>
              {/* <NavLink className="block transition duration-300 hover:text-blue-600" to="/dashboard">Dashboard</NavLink> */}
              <NavLink
                className="block transition duration-300 hover:text-blue-600"
                onClick={logout}
                to="/logout"
              >
                Log Out
              </NavLink>
            </>
          ) : (
            <NavLink
              className="block transition duration-300 hover:text-blue-600"
              to="/auth"
              onClick={closeMenu}
            >
              Login or Register
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
