import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helper/utility';

const initialState = {
    result: null,
    loading:null,
    error:null
};

const reducer = (state = initialState, action) => {
    switch (action.typ){
        case actionTypes.GET_RESULT_TITLE_START:
            return updateObject(state, {loading: true, error:null});
        case actionTypes.GET_RESULT_TITLE_SUCCESS:
            return updateObject(state, {
                loading:null,
                result:action.result
            });
        case actionTypes.GET_RESULT_TITLE_FAIL:
            return updateObject(state, {loading:null,error:true});
        default: return state;
    };
};

export default reducer;
