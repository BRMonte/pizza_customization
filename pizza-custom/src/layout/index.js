import React from 'react';

const Layout = (props) => (
  <div>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  {props.children}
  </div>
);

export { Layout };
