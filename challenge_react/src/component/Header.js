import React, { Component } from 'react';

import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class Header extends Component {
    render() {
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
                                <a className="nav-link active" href="./index.html">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./gallery.html">GALLERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./contact.html">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        );
    }
}

export default Header;