import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

const Navigation = props => {
    return (
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 col-12">
              <a href="./index.html"><img src={require('../assets/logo/logo-alterra-academy.png')} /></a>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12 col-12">
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/galerry">Gallery</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li class="nav-item">
                  <Link to="/news">News</Link>
                </li>
                <li class="nav-item">
                  <Link to="/profil">Profile</Link>
                </li>
                <li class="nav-item">
                  <Link to="/signin">Login</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" onClick={() => props.postSignout()}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      );
    }
  
export default Navigation;