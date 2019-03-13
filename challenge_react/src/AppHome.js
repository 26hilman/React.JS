import React, { Component } from 'react';

import Footer from './component/Footer';
import About from './component/About';

import { Redirect } from 'react-router-dom';

const AppHome = props =>{
    const is_login = JSON.parse(localStorage.getItem("is_login"));
  
    if (is_login === null){
      return <Redirect to={{pathname: "/signin"}}/>;
    }
  else {
        return (
            <div className="App">
              
              <About />
              <Footer />
            </div>
        );
    }
}

export default AppHome;