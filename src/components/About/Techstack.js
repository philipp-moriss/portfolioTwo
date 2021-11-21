import React from "react";
import {Col, Row} from "react-bootstrap";
import {DiGit, DiJavascript1, DiMongodb, DiNodejs, DiReact,} from "react-icons/di";
import {SiTypescript} from "react-icons/si";
import {FaStackOverflow} from "react-icons/all";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">

            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaStackOverflow/>
            </Col>
        </Row>
    );
}

export default Techstack;
