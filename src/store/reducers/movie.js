import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helper/utility';

const initialState = {
    searchTitle:null,
    searchResult:null,
    movieDetail:null,
    peopleDetail:null,
    popularMovies:null,
    filteredMostPopular:null,
    error:null,
    loading:null
};

const reducer = ( state = initialState, action ) => {
    switch (action.type){
        default:return state;
    };
};

export default reducer;
