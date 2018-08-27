import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
