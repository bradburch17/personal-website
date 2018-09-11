import React, { Component } from 'react';
import portrait from './files/self.jpg';
import resume from './files/Brad_Burch_Resume.pdf';
import './About.css';

class About extends Component {
  render() {
    return (
      <a name="about">
      <div className="row About">
        <div className="col">
          <img src={portrait} className="portrait" alt="portrait" />
        </div>
        <div className="col text-left">
            <p>Hey, I'm Brad!</p>
            <p>I live in San Francisco, CA.</p>
            <p>Indiana born and raised.</p>
            <p>Software Engineer.</p>
            <p>Runner.</p>
            <p>Java - React - Python - Full Stack Engineering</p>
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
