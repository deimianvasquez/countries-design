import React, { useEffect, Fragment } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesAction } from '../actions/countriesActions';

//Components
import Country from '../components/Country';

//react-bootstrap
import {
    Container,
    Row,
    Col,
    Dropdown
} from 'react-bootstrap';

const Home = () => {
    //llamamos las ciudades
    const dispatch = useDispatch();

    useEffect(() => {
        //llamar las cidades cuando el componente este listo 
        const downloadCountries = () => dispatch(getCountriesAction());
        downloadCountries();
    }, []);


    //Acceder a los states 
    const loading = useSelector(state => state.countries.loading);
    const error = useSelector(state => state.countries.error);
    const countries = useSelector(state => state.countries.countries);

    return (
        <Fragment>
            {/* si existe un error al consultar la app imprima que no se pudo cargar la api */}
            {error
                ?
                <div className="alert alert-danger">Error al cargar la api, consulte al administrador del sitio</div>
                :
                <Fragment>
                    <Container>
                        <Row>
                            {countries.map(country => {
                                return (
                                    <Country
                                        key={country.name}
                                        flag={country.flag}
                                        name={country.name}
                                        population={country.population}
                                        region={country.region}
                                        capital={country.capital}
                                    />
                                )
                            })}
                        </Row>
                    </Container>

                    {loading ? <div className="mt-5">cargando...</div> : null}

                </Fragment>
            }
        </Fragment>
    )
}

export default Home;