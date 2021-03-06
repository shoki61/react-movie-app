import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helper/utility';

const initialState = {
    searchTitle:null,
    movieDetail:null,
    credits:null,
    externalID: null,
    popularMovies:[],
    filteredMostPopular:null,
    page:1,
    error:null,
    loading:null
};

const reducer = ( state = initialState, action ) => {
    switch (action.type){
        case actionTypes.SEARCH_TITLE:
            return updateObject(state,{searchTitle: action.title});

        case actionTypes.FILTERED_MOST_POPULAR:
            return updateObject(state, {filteredMostPopular: action.filteredMostPopular});

        case actionTypes.GET_POPULAR_MOVIES_START:
            return updateObject(state, {loading:true, error:null});
        case actionTypes.GET_POPULAR_MOVIES_SUCCESS:
            return updateObject(state, {
                loading:null,
                popularMovies: action.popularMovies,
                page:action.page
            });
        case actionTypes.GET_POPULAR_MOVIES_FAIL:
            return updateObject(state, {loading:null, error:true});

        case actionTypes.CREDITS:
            return updateObject(state, {credits: action.credits});

        case actionTypes.EXTERNAL_ID:
            return updateObject(state,{externalID: action.externalID})

        case actionTypes.GET_MOVIE_DETAIL_START:
            return updateObject(state, {loading:true,error:null});
        case actionTypes.GET_MOVIE_DETAIL_SUCCESS:
            return updateObject(state, {
                loading:null,
                movieDetail: action.movieDetail
            });
        case actionTypes.GET_MOVIE_DETAIL_FAIL:
            return updateObject(state, {loading:null, error:true});

        default:return state;
    };
};

export default reducer;
