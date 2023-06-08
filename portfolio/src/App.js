import React from "react";
import Navigation from "./components/Navigation";
import Cover from "./components/Cover";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Container fluid>
        <Cover />
        <Fade bottom>
          <About />
        </Fade>
        <Zoom>
          <Skills />
        </Zoom>
          <Projects />
      </Container>
    </div>
    
  );
}

export default App;

