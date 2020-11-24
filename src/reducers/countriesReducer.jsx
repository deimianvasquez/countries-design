import { Form } from "react-bootstrap";
import {
    START_DOWNLOAD_COUNTRIES,
    DOWNLOAD_COUNTRIES_SUCCESS,
    DOWNLOAD_COUNTRIES_ERROR,
} from '../types';

const initialState = {
    countries: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case START_DOWNLOAD_COUNTRIES:
            return {
                ...state,
                loading: true,
            }
        case DOWNLOAD_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries:action.payload,
                loading:false,
                error:false
            }
        case DOWNLOAD_COUNTRIES_ERROR:
            return{
                ...state,
                countries:[],
                error:true,
                loading:false
            }

        default:
            return state;
    }
}