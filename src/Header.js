import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
    <header className="header row">
      <div className="col align-self-center">
        <h1>You have an awesome idea.</h1>
        <h2>I can help you bring that idea to fruition.</h2>
      </div>
    </header>
    );
  }
}

export default Header;
