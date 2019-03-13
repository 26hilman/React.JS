import React, { Component } from 'react';

import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class Contact extends Component {
    render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <img src={require('../assets/img/side-view.jpg' )} className="kontak"/>
                    <div className="warna-tumpukan">
                        <img src={require('../assets/logo/logo-alterra-academy-plain@2x.png' )} className="logo-alterra"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contact-box">
                        <div className="title-contact">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="box-kontak">
                            <span>Send us a message and we will get back to you as soon as possible</span>
                        </div>
                        <br />
                        <form>
                            <div className="form-group">
                                <label for="name">Name <span3>*</span3></label><br />
                                <input type="text" className="form-control" id="name"/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email <span3>*</span3></label><br />
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="form-group">
                                <label for="phone">Phone Number <span3>*</span3></label><br />
                                <input type="phone" className="form-control" id="phone"/>
                            </div>
                            <div className="form-group">
                                <label for="national">National</label><br />
                                <select className="custom-select custom-select-lg mb-3">
                                    <option selected></option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Singapura">Singapura</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="message">Message</label><br />
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <button type="button" className="btn btn-secondary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Contact;