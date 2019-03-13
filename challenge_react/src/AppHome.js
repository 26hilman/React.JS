import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';

class AppHome extends Component {
    render() {
        return (
            <div className="App">
              <Header />
              <About />
              <Footer />
            </div>
        );
    }
}

export default AppHome;