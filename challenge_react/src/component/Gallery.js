import React, { Component } from 'react';

import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class Gallery extends Component {
    render() {
    return (
        <section>
            <div className="container">
                <div className="container-gallery">
                    <div className="row">
                        <img src={require('../assets/ico/ico-gallery@2x.png')} className="gallery-image"/>
                        <div className="border-bawah">GALLERY</div>
                    </div>
                    <hr />
                    <div className="container">
                        <div className="kump-gambar">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <img src={require('../assets/img/exp-gallery/jake-allison-1322894-unsplash.jpg' )} className="image1"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <img src={require('../assets/img/exp-gallery/jay-lee-1323073-unsplash.jpg' )} className="image1"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <img src={require('../assets/img/exp-gallery/nic-yee-1321843-unsplash.jpg' )} className="image1"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <img src={require('../assets/img/exp-gallery/nordwood-themes-1319985-unsplash.jpg' )} className="image1"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <img src={require('../assets/img/exp-gallery/phil-desforges-1322844-unsplash.jpg' )} className="image1"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <img src={require('../assets/img/exp-gallery/ryan-1321510-unsplash.jpg' )} className="image1"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Gallery;