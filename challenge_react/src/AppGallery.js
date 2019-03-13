import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Gallery from './component/Gallery';

class AppGallery extends Component {
    render() {
        return (
            <div className="App">

              <Gallery />
              <Footer />
            </div>
        );
    }
}

export default AppGallery;