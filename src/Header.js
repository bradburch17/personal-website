import React, { Component } from 'react';
import picture from './files/self.jpg';
import resume from './files/Brad_Burch_Resume.pdf';
import './Header.css';

class Header extends Component {
  render() {
    return (
    <header className="App-header">
     <div className="row">
       <div className="col">
         <img src={picture} className="App-logo" alt="logo" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="App-title">Hi!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a href={resume} className="btn btn-lg btn-outline" target="_blank"><i className="fa fa-file"></i> View Resume</a>
        </div>
      </div>
      </header>
    );
  }
}

export default Header;
