import React, { Component } from 'react';
// import img from './assets/logo/logo-alterra-academy.png';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class BeritaTerkini extends Component {
    render() {
      return (
        <div class="col-md-4">
            <br/>
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">BERITA TERKINI</h5>
                    <a href=""><small>Lihat Semua</small></a>
                  </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Lorem Ipsum</h5>
                    <small class="text-muted">1 days ago</small>
                  </div><br></br>
                  <p class="mb-1" style={{fontSize:"14px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry... </p>
                  <small class="text-muted" style={{fontWeight:"900"}}><img src={require('../assets/logo/logo-alterra-academy.png')} style={{width:"50px", height:"25px"}}/></small>
                </a>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Lorem Ipsum</h5>
                    <small class="text-muted">2 days ago</small>
                  </div><br></br>
                  <p class="mb-1" style={{fontSize:"14px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry... </p>
                  <small class="text-muted" style={{fontWeight:"900"}}><img src={require('../assets/logo/logo-alterra-academy.png')} style={{width:"50px", height:"25px"}}/></small>
                </a>
            </div>

            <br/>
        </div>
      );
    }
  }

export default BeritaTerkini;