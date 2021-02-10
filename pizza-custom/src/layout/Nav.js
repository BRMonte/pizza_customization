import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => (
   <nav className="bg-purple-600 text-white p-4 shadow">
      <ul className="flex space-x-6 justify-end">
        <li><NavLink exact to="/" activeClassName="border-b border-white">Home</NavLink></li>
        <li><NavLink exact to="/about" activeClassName="border-b border-white">About</NavLink></li>
        <li><NavLink exact to="/contact" activeClassName="border-b border-white">Contact</NavLink></li>
      </ul>
    </nav>
);

export default Nav;
