import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Hi Everyone, I am <span className="purple">Philipp veremeychik </span>
                        from <span className="purple"> Minsk, Belarus.</span>
                        <br/>I'm a <span className="purple"> Front-end developer</span>
                        <br/>Front-End developer with
                        experience in creating<span className="purple"> SPA using
                        React, Next, Redux, MobX, Typescript, HTML,
                        CSS, SCSS, JS.</span> <br/>I'm always looking
                        forward to improve my expertise.
                        <br/>I'm planing to study <span className="purple">Node.js</span>,
                        because my next focus is to
                        become a<span className="purple"> Full-Stack Developer.</span>
                        <br/>Usually I spend my leisure time on
                        <span className="purple"> Codewars</span> and improve my <span
                        className="purple">English.</span>
                        Open for your <span className="purple"> suggestions</span>
                        <br/>
                    </p>
                    <span> My favorite quote in life </span>
                    <p style={{marginBlockEnd: 0, color: "rgb(155 126 172)"}}>
                        "Success consists of going from <br/>failure to failure without loss of enthusiasm."{" "}
                    </p>
                    <footer className="blockquote-footer">winston churchill</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
