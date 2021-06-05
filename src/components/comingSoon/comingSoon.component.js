  
import React, { Component } from 'react';
import "./comingSoon.component.css";
import Wave from 'react-wavify'
import logo from '../../assets/images/Logo.jpeg';

export default class comingSoon extends Component {

    render() {
   
      return (
        <div className="comingSoonBody">
          <div className="logoHolder">
           <img className="logo" src={logo} alt="SpectraDx Logo"></img>
           <br></br>
           <span className="logoText">Coming Soon</span>
          </div>
          <div className="waves">
            <Wave className="wave1" fill='#f79902' options={{height: 100,amplitude: 100,speed: 0.20,points: 6}}/>
            <Wave className="wave2" fill='#ededed' options={{height: 120,amplitude: 80,speed: 0.25,points: 5}}/>
          </div>
        </div>
      );
    }
  }