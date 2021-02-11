import React from 'react';
import { NavLink } from "react-router-dom";

const navs = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
  {
    path: '/biruleibe',
    name: 'Biruleibe'
  }
];

const Nav = () => (
   <nav className="bg-purple-600 text-white p-4 shadow">
      <ul className="flex space-x-6 justify-end">
        {navs.map((navItem) => (
          <li><NavLink exact to={navItem.path} activeClassName="text-yellow-400">{navItem.name}</NavLink></li>
        ))}
      </ul>
    </nav>
);

export default Nav;
