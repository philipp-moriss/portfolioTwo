import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {AiFillGithub, AiFillInstagram,} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {ImTelegram} from "react-icons/im";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Designed and Developed by <span className={"purple"}>Philipp</span></h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>{year}</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/philipp-moriss"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://t.me/pony_ride"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ImTelegram/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/philipp-veremeychik-86b93a221/"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/philip_morris.bmx/"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
