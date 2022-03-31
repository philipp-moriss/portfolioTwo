import React from "react";
import {Col, Row} from "react-bootstrap";
import {SiGithub, SiGitlab, SiHeroku, SiPostman, SiVisualstudio, SiWebstorm, SiWindows} from "react-icons/si";
import {DiLinux, FaBook, IoLogoFigma} from "react-icons/all";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiLinux/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWebstorm/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudio/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaBook/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHeroku/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGitlab/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGithub/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <IoLogoFigma/>
            </Col>
        </Row>
    );
}

export default Toolstack;
