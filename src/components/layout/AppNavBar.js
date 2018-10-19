import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import About from '../component/About';
//import LoginPage from '../component/LoginPage';
//import RegisterUser from '../component/RegisterUser';

class AppNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm  navbar-dark bg-primary mb-30 py-40">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Interchange Qualification
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item col-md-12">
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item ">
                <Link to="../component/LoginPage" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="../component/RegisterUser" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="../component/About" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item col-sm-10">
                <Link to="../component/LoginPage" className="nav-link">
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppNavBar;
