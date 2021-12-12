import React, {useRef, useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/home-main.svg";
import {Formik} from 'formik';
import emailjs from 'emailjs-com';
import {ModalInfo} from "../Modal/modalInfo";


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
                            if (!values.name) {
                                errors.name = 'Required';
                            }
                            if (!values.message) {
                                errors.message = 'Required';
                            }
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
                                        {errors.name ? <span
                                                className={"purple"}>{errors.name && touched.name && errors.name}</span> :
                                            values.name ? <span className={"purple"}>beautiful name</span> :
                                                <span
                                                    className={"purple"}>Please enter your Name.</span>}
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
                                            values.email ? <span className={"purple"}>nice Email</span> :
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
                                        {errors.message ? <span
                                                className={"purple"}>{errors.message && touched.message && errors.message}</span> :
                                            values.message ? <span className={"purple"}>i will read your text)</span> :
                                                <span className={"purple"}>Please enter the text you want to send</span>}
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
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d301013.62068468437!2d27.31319216987381!3d53.88431382303025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1638091122550!5m2!1sru!2sby"
                        style={{width: "100%", height: "100%",borderRadius:"30px",marginTop:"10px"}} loading="lazy"/>
                </Row>
            </Container>
        </Container>
    );
}

export default Contacts;
