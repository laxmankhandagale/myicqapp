import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm  navbar-dark bg-primary mb-30 py-40">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link ">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.PropTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
