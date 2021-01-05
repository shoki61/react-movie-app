import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../helper/utility";

const initialState = {
    personalInformation:null,
    error:null,
    loading:null
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.GET_PEOPLE_DETAILS_START:
            return updateObject(state,{loading:true, error:null});
        case actionTypes.GET_PEOPLE_DETAIL_SUCCESS:
            return updateObject(state,{
                loading:null,
                personalInformation: action.personalInformation
            });
        case actionTypes.GET_PEOPLE_DETAIL_FAIL:
            return updateObject(state,{
                loading:null,
                error:true
            });
        default: return state;
    };
};

export default reducer;
