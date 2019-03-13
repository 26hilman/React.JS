import React, { Component } from 'react';

import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class About extends Component {
    render() {
    return (
        <section>
            <div className="header-profile">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div className="profile-content">
                            <img src={require('../assets/img/profile-picture.jpeg')} id="portrait"/>
                            <div className="name">
                                <label>Hian Olieviera</label>
                            </div>
                            <div className="location">
                                <img src={require('../assets/ico/ico-location.png')} />
                                <label>Malang, East Java, Indonesia</label>
                            </div>
                            <div className="profession">
                                <label>Front End Dev, UI/UX and Design</label>
                            </div>
                            <div className="view-profile">
                                <a href="#" type="button" className="btn btn-primary">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="border">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about-me">
                                <span className="title">About Me</span>
                                <br />
                                <br />
                                <p>Hi! I am <strong>Hian Olieviera</strong>, I work as a <i>Front-End Developer</i> at <span1>Alterra Group.</span1></p>
                                <p>Front End Developer are constructive work websites use HTML, CSS, and JavaScript</p>
                                <p>Front End Developer are the people who make it design and develop the design until become a website that can run</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="information">
                                <span className="title">Information</span>
                                <br />
                                <br />
                                <table>
                                    <tr>
                                        <td className="tab-title">Age</td>
                                        <td>: 22 th</td>
                                    </tr>
                                    <tr className="tab-even">
                                        <td className="tab-title">Email</td>
                                        <td>: hian.olievera@alterra.id</td>
                                    </tr>
                                    <tr>
                                        <td className="tab-title">Address</td>
                                        <td>: Jl. Simpang Tambora I No. 9, <br /> Karang Besuki, Sukun, Malang, 65146</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default About;