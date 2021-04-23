import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helper/utility';

const initialState = {
    searchTitle:null,
    movieDetail:null,
    credits:null,
    externalID: null,
    movies:[],
    similarMovies:[],
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

        case actionTypes.GET_MOVIES_START:
            return updateObject(state, {loading:true});
        case actionTypes.GET_MOVIES_SUCCESS:
            return updateObject(state, {
                loading:null,
                movies: action.movies,
                page:action.page
            });
        case actionTypes.GET_MOVIES_FAIL:
            return updateObject(state, {loading:null, error:true});

        case actionTypes.CREDITS:
            return updateObject(state, {credits: action.credits});

        case actionTypes.EXTERNAL_ID:
            return updateObject(state,{externalID: action.externalID})

        case actionTypes.GET_MOVIE_DETAIL_START:
            return updateObject(state, {loading:true});
        case actionTypes.GET_MOVIE_DETAIL_SUCCESS:
            return updateObject(state, {
                loading:null,
                movieDetail: action.movieDetail
            });
        case actionTypes.GET_MOVIE_DETAIL_FAIL:
            return updateObject(state, {loading:null, error:true});
        
        case actionTypes.GET_SIMILAR_MOVIES_START:
            return updateObject(state, { loading: true});
        case actionTypes.GET_SIMILAR_MOVIES_SUCCESS:
            return updateObject(state, {loading:null, similarMovies: action.similarMovies});
        case actionTypes.GET_SIMILAR_MOVIES_FAIL:
            return updateObject(state, {loading:null, error: true});

        default: return state;
    };
};

export default reducer;
