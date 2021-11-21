import React, {useRef, useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/home-main.svg";
import {Formik} from 'formik';
import emailjs from 'emailjs-com';
import {ModalInfo} from "../Modal/modalInfo";
import Particles from "react-particles-js";


function Contacts() {
    const form = useRef();
    const [show, setShow] = useState(false);
    return (
        <Container fluid className="resume-section">
            <Container>
                <h1 className="project-heading">
                    Contact me via <strong className="purple">Email </strong><span className="wave" role="img"
                                                                                   aria-labelledby="wave">👋🏻</span>
                </h1>
                <p style={{color: "white",}}>
                    you will send messages to my email
                </p>
                <ModalInfo show={show} setShow={setShow}/>
                <Row style={{justifyContent: "center", paddingBottom: "10px",}}>
                    <Col md={5} style={{paddingBottom: 20, justifyContent: "flex-start"}}>
                        <Tilt>
                            <img src={homeLogo} alt="home pic" className="img-fluid"/>
                        </Tilt>
                    </Col>
                    <Formik
                        initialValues={{email: '', name: '', message: ''}}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onReset={(values) => {
                            values.email = ""
                            values.name = ""
                            values.message = ""
                        }}
                        onSubmit={() => {
                            emailjs.sendForm('service_19we0oe', 'template_b5hhljn', form.current, 'user_u2RLQ7POwFC54AEBiTZyq')
                                .then((result) => {
                                    console.log(result.text);
                                    setShow(true)
                                }, (error) => {
                                    console.log(error.text);
                                });

                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleSubmit,
                              handleReset,
                              handleBlur,
                              isSubmitting,
                          }) => (
                            <Form style={{width: "50%"}} ref={form} onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="name"
                                        name="name"
                                        placeholder="Enter name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <Form.Text className={"z"}>
                                        <span className={"purple"}>Please enter your name</span>
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email} name={"email"} type="email" placeholder="Enter email"/>
                                    <Form.Text className={"z"}>
                                        {errors.email ? <span
                                                className={"purple"}>{errors.email && touched.email && errors.email}</span> :
                                            <span
                                                className={"purple"}>Please enter your Email.</span>}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email Text</Form.Label>
                                    <Form.Control
                                        as={"textarea"}
                                        type="text"
                                        placeholder="Enter text"
                                        name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                    />
                                    <Form.Text className={"z"}>
                                        <span className={"purple"}>Please enter the text you want to send</span>
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" disabled={isSubmitting} style={{margin: '20px'}}
                                        type="submit">
                                    Submit
                                </Button>
                                <Button variant="primary" onClick={handleReset} type="reset">
                                    Reset
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Row>
            </Container>
        </Container>
    );
}

export default Contacts;
