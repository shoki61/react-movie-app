import * as actionTypes from './actionTypes';
import axios from '../../axios';
import { APIKey } from '../../env';


const personalInformationStart = () => {
    return{
        type: actionTypes.GET_PERSON_DETAIL_START
    };
};

const personalInformationSuccess = data => {
    return{
        type: actionTypes.GET_PERSON_DETAIL_SUCCESS,
        personalInformation: data
    };
};

const personalInformationFail = () => {
    return{
        type: actionTypes.GET_PERSON_DETAIL_FAIL
    };
};

const getPersonalInformation = id => {
    return dispatch => {
        dispatch(personalInformationStart());
        axios.get(`/person/${id}?api_key=${APIKey}&language=en-US`)
            .then(response => {
                dispatch(personalInformationSuccess(response.data))
            })
            .catch(error => personalInformationFail());
    };
};


export {
    getPersonalInformation
};
