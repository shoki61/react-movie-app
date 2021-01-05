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
            return updateObject(state, {loading: true});
        case actionTypes.GET_RESULT_TITLE_SUCCESS:
            return updateObject(state, {
                result:action.result,
                loading:null
            });
        case actionTypes.GET_RESULT_TITLE_FAIL:
            return updateObject(state, {error:true});
        default: return state;
    };
};

export default reducer;
