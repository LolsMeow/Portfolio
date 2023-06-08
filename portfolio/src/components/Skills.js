import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { languages, technologies } from "./constants";
import { SkillCards } from "./SkillCards";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: true,
    };
  }

  getSkills = (listObj) => {
    return <SkillCards {...listObj} />;
  };

  displayList = (list) => {
    return list.map((listObj) => this.getSkills(listObj));
  };

  render() {
    return (
      <Container fluid className="skillsAll">
        <Row id="skills">
          <Col span={10}>
            <div className="skills">Skills</div>
          </Col>
        </Row>
        <Row className="heading" style={{ textAlign: "center" }}>
          <Col span={12}>
              Languages
          </Col>
        </Row>
        <Row className="skillNames">
          {this.displayList(languages)}
        </Row>
        <Row className="heading" style={{ textAlign: "center" }}>
          <Col span={12}>
              Technologies
          </Col>
        </Row>
        <Row className="skillNames">
          {this.displayList(technologies)}
        </Row>
      </Container>
    );
  }
}
export default Skills;