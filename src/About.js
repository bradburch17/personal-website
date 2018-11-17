import React, { Component } from 'react';
import portrait from './files/self.jpg';
import resume from './files/Brad_Burch_Resume.pdf';
import './About.css';

class About extends Component {
  render() {
    return (
      <a name="about">
      <div className="row About">
        <div className="col align-self-center">
            <h2>Hey, I'm Brad!</h2>
            <p>I live in San Francisco, CA.</p>
            <p>Born and raised in Indiana.</p>
            <p>I develop software.</p>
            <p>I also run.</p>
            <p>Java - React - Python - Full Stack Engineering</p>
            <p>Check out my <a href="https://www.linkedin.com/in/burchbrad/">LinkedIn</a></p>
            <p>Check out my <a href="https://www.strava.com/athletes/23746565">STRAVA</a></p>
            <p>Here's my <a href="https://github.com/bradburch17">Github</a></p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a href={resume} className="btn btn-lg btn-outline" target="_blank"><i className="fa fa-file"></i> View Resume</a>
        </div>
      </div>
      </a>
    );
  }
}

export default About;
