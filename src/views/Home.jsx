import React, { Fragment } from 'react';

//components
import Countries from '../components/Countries';

//react-bootstrap
import {
    Container,
    Row,
    Col,
    Dropdown
} from 'react-bootstrap';

const Home = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col xs={12}>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search for a country"
                            name="search"
                        />
                    </Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Filter by Region
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                       
                    </Col>
                    
                </Row>
            </Container>
            <Container>
                <Row>
                    <Countries/>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Home;