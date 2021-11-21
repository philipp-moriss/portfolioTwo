import React from "react";
import {Col, Row} from "react-bootstrap";
import {SiHeroku, SiPostman, SiWebstorm, SiWindows,} from "react-icons/si";
import {FaBook} from "react-icons/all";

function Toolstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWebstorm/>
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
        </Row>
    );
}

export default Toolstack;
