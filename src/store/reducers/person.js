import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../helper/utility";

const initialState = {
    personalInformation:null,
    personalMovieCredits:null,
    personalTVCredits:null,
    error:null,
    loading:null
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.GET_PERSON_DETAIL_START:
            return updateObject(state,{loading:true, error:null});
        case actionTypes.GET_PERSON_DETAIL_SUCCESS:
            return updateObject(state,{
                loading:null,
                personalInformation: action.personalInformation
            });
        case actionTypes.GET_PERSON_DETAIL_FAIL:
            return updateObject(state,{
                loading:null,
                error:true
            });
        case actionTypes.GET_PERSON_MOVIE_CREDITS:
            return updateObject(state, {personalMovieCredits: action.movieCredits});
        case actionTypes.GET_PERSON_TV_CREDITS:
            return updateObject(state, {personalTVCredits: action.TVCredits});
        default: return state;
    };
};

export default reducer;
