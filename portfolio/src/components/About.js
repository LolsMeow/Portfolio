import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoverPicture2 from "../images/CoverPicture2.svg";

class About extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="aboutAll">
          <Col lg={6}>
            <img
              src={CoverPicture2}
              width="100%"
              height="auto"
              alt="placeholder"
              className="aboutPicture"
            ></img>
          </Col>
          <Col lg={6}>
            <div className="about">About me</div>
            <div className="aboutDescription">
              Hello, I recently graduated from Hunter College with a computer
              science degree. I am a problem solver and a perfectionist. 
              I enjoy helping others solve their problems as well as dive deep
              into how to make my everyday problems easier. I am detail oriented 
              and have a high standard for things I do. My goal is to solve 
              problems so that others do not need to. I feel accomplished when 
              people can focus on what they are doing because of me.
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default About;