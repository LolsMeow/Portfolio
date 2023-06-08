import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoverPicture from "../images/CoverPicture.svg";
import signature from "../images/signature.gif";

class Cover extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="cover" id="home">
          <Col lg={6}>
            <div className="coverName">
                <img src={signature} alt = "signature" />
            </div>
            <div className="coverDescription">
              <div className="flip">
                <div>
                  <div>Software Engineer</div>
                </div>
                <div>
                  <div>Web Development</div>
                </div>
                <div>
                  <div>Information Technology</div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src={CoverPicture}
              alt="placeholder"
              width="100%"
              height="auto"
              className="coverPhoto"
            ></img>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Cover;