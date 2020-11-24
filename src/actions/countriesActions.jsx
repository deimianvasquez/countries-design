import axios from 'axios';
import {
    START_DOWNLOAD_COUNTRIES,
    DOWNLOAD_COUNTRIES_SUCCESS,
    DOWNLOAD_COUNTRIES_ERROR
} from '../types';

export function getCountriesAction() {
    return (dispatch) => {
        dispatch(getCountriesStart())

        //Consulta api
        axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(response => {
                //console.log(response.data);
                dispatch(downloadCountriesSuccess(response.data))
            })
            .catch(error => {
                // console.log(error)
                dispatch(downloadCountriesError())
            })



    }
}

export const getCountriesStart = () => ({
    type: START_DOWNLOAD_COUNTRIES
})

export const downloadCountriesSuccess = countries => ({
    type: DOWNLOAD_COUNTRIES_SUCCESS,
    payload: countries

})

export const downloadCountriesError = () => ({
    type:DOWNLOAD_COUNTRIES_ERROR
})