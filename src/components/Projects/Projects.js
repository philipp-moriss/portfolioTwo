import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import weatherApp from "../../Assets/Projects/76820-meteorology-weather-cloud-icon-download-hq-png.png";
import cards from "../../Assets/Projects/social-media-g9cf8b4a24_1920.png";
import gameCalculator from "../../Assets/Projects/brain-g16a5352a6_1920.jpg";
import toDoList from "../../Assets/Projects/pexels-breakingpic-3299.jpg";
import socialNetwork from "../../Assets/Projects/social-network-background-with-icons-free-vector.jpg";
import {ParticlThem} from "../particlThem";

function Projects() {
    return (
        <Container fluid className="project-section">
            <ParticlThem/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={weatherApp}
                            title="Weather"
                            description="Weather App"
                            link="https://github.com/philipp-moriss/weatherApp"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={gameCalculator}
                            title="game Calculator"
                            description="game Calculator"
                            link="https://github.com/philipp-moriss/game-calculator"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={toDoList}
                            title="To Do List"
                            description="to Do List"
                            link="https://github.com/philipp-moriss/ToDoListProject"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={socialNetwork}
                            title="Social Network"
                            description="Social Network "
                            link="https://github.com/philipp-moriss/socialNetworck"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={cards}
                            title="Cards"
                            description="Cards"
                            link="https://github.com/philipp-moriss/socialNetworck"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
