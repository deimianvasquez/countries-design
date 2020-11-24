import React from 'react';

//react-bootstrap
import { Col } from 'react-bootstrap';

const Countries = ({ flag, name, population, region, capital }) => {
    return (
        <Col xs={12} sm={6} md={4} lg={3} className="mt-4 mb-4" >
            <div className="Country__container">
                <img src={flag} alt="flag" />
                <h4 className="text-center">{name}</h4>
                <p>Population: <span>{population}</span> </p>
                <p>Region: <span>{region}</span> </p>
                <p>Capital: <span>{capital}</span> </p>
            </div>
        </Col>
    )
}

export default Countries;