import React from 'react';

//react-bootstrap
import {  Container, Row, Col } from 'react-bootstrap';

const Menu = () => {
    return (
        <Container fluid={true} className="">
            <Container>
                <Row>
                    <Col className="borders d-flex justify-content-between">
                        <div>Where in the world?</div>
                        <div> Dark Mode </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Menu;