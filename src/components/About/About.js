import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import AboutCard from "./AboutCard";

function About() {
    return (
        <Container fluid className="about-section">
            <Container>
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                        }}
                    >
                        <h1 style={{fontSize: "2.1em", paddingBottom: "20px"}}>
                            Know Who <strong className="purple">I'M</strong>
                        </h1>
                    </Col>
                    <Col
                        md={6}
                        style={{paddingTop: "20px", paddingBottom: "50px"}}
                        className="about-img"
                    >
                        <AboutCard/>
                    </Col>
                    <Col
                        md={6}
                        style={{paddingTop: "120px", paddingBottom: "50px"}}
                        className="about-img"
                    >
                        <img src={laptopImg} alt="about" className="img-fluid"/>
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong>
                </h1>

                <Techstack/>

                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>
                <Toolstack/>

            </Container>
        </Container>
    );
}

export default About;
