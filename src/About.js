import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <a name="about">
      <div className="row About">
        <div className="col">
          <h2>About</h2>
          <p>
          Hello! I am Brad Burch, a software engineer with experience building full stack web applications, testing automation frameworks, 
          microservices, and something else. 

          I previously worked at Salesforce where I was helping maintain automated test framework and build a new microservice framework for 
          running integration tests on the Salesforce platform. With this experience, I know the importance of writing maintanable, scalable, 
          and testable code upfront. These principles allow a developer to spend more time developing new features later on, rather than going
          back to fix old code. 
        </p>
        </div>
      </div>
      </a>
    );
  }
}

export default About;
