import React, { Component } from 'react';

import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class Footer extends Component {
    render() {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-12">
                        <img className="logo-foot" src={require('../assets/logo/logo-alterra-academy-plain@2x.png')} />
                        <br />
                        <label className="copy-right">&copy Copyright Alterra Group 2019</label>
                    </div>
                    <div className="col-md-5 col-sm-12 col-12"></div>
                    <div className="col-md-3 col-sm-12 col-12">
                        <div className="media-social">
                            <label id="label-sosmed">Follow us on</label>
                            <div className="row">
                                <div className="col-md-3 col-sm-2 col-5">
                                    <div className="pict-sos">
                                        <a href="www.facebook.com"><img src={require('../assets/ico/ico-facebook@2x.png' )} /></a>
                                    </div>
                                </div>
                                <div className="col-md-9 col-sm-10 col-7">
                                    <label className="content-sos"><a href="www.facebook.com">Facebook</a></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-2 col-5">
                                    <div className="pict-sos">
                                        <a href="www.twitter.com"><img src={require('../assets/ico/ico-twitter@2x.png' )} /></a>
                                    </div>
                                </div>
                                <div className="col-md-9 col-sm-10 col-7">
                                    <label className="content-sos"><a href="www.twitter.com">Twitter</a></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-2 col-5">
                                    <div className="pict-sos">
                                        <a href="www.instagram.com"><img src={require('../assets/ico/ico-instagram@2x.png' )} /></a>
                                    </div>
                                </div>
                                <div className="col-md-9 col-sm-10 col-7">
                                    <label className="content-sos"><a href="www.instagram.com">instagram</a></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default Footer;