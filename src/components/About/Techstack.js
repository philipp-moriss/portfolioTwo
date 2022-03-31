import React from "react";
import {Col, Row} from "react-bootstrap";
import {DiGit, DiJavascript1, DiMongodb, DiNodejs, DiReact} from "react-icons/di";
import {SiAntdesign, SiMaterialui, SiTypescript, SiWebdriverio, SiBootstrap, SiLess, SiJest, SiNextdotjs} from "react-icons/si";
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
                <SiNextdotjs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMaterialui/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiBootstrap/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAntdesign/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaStackOverflow/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWebdriverio/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLess/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJest/>
            </Col>
        </Row>
    );
}

export default Techstack;
