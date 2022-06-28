import React from 'react';

export const Navbar = () => {
  return (
    <div className="d-flex justify-content-between mx-5">
      <a href="/" className="me-5">
        Home
      </a>
      <div>
        <a href="about" className="me-3">
          About
        </a>
        <a href="contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
