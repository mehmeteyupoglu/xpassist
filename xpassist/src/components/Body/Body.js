import React from 'react';
import { Container, Row, Col, Button } from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faTree } from '@fortawesome/free-solid-svg-icons'
import "./Body.css"

const Body = () => {
    return (
        <>
            <div className="body">
                <Container className="container">
                    <Row>
                        <Col sm="12" md={{ size: 9, offset: 1 }} className="col-top"> 
                            <div className="brand">
                                <h1><span id="span">XpAssist</span> helps expats with settling and more!</h1><br/>
                                See our services and what local assistants can do for you<br/>
                                <Button className="button"><h1>Services</h1></Button>
                                <Button className="button"><h1>Hire an Assistant</h1></Button>
                            </div>
                            <div className="clouds">
                                <FontAwesomeIcon icon={faCloud} id="icon" />
                                <FontAwesomeIcon icon={faCloud} id="icon2" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="transition">
                <FontAwesomeIcon icon={faTree} className="tree-icon" />
                <div className="sun"></div>
            </div>
        </>
    );
}

export default Body;
