import React from "react";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export  function ModalInfo(props) {


    const handleClose = () => props.setShow(false);

    return (
        <>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton style={{backgroundColor:"#261e2d",border:"black"}}>
                    <Modal.Title ><span className={"purple"}>Success</span></Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:"#261e2d",border:"black"}} ><span className={"purple"}>Email send :)</span></Modal.Body>
                <Modal.Footer style={{backgroundColor:"#261e2d",border:"black"}}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}