import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="row Contact">
        <div className="col">
          <h2>Contact</h2>
          <p>
            <a href="#" className="icons far fa-envelope"></a>
            <a href="#" className="icons fab fa-github"></a>
            <a href="#" className="icons fab fa-linkedin-in"></a>
            <a href="http://strava.com/athletes/23746565/badge" className="strava-badge- strava-badge-follow" target="_blank"></a>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
