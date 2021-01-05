import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helper/utility';

const initialState = {
    searchTitle:null,
    movieDetail:null,
    popularMovies:null,
    filteredMostPopular:null,
    error:null,
    loading:null
};

const reducer = ( state = initialState, action ) => {
    switch (action.type){
        case actionTypes.SEARCH_TITLE:
            return updateObject(state,{searchTitle: action.title});

        case actionTypes.FILTERED_MOST_POPULAR_START:
            return updateObject(state, {loading: true, error:null});
        case actionTypes.FILTERED_MOST_POPULAR_SUCCESS:
            return updateObject(state, {filteredMostPopular: action.filteredMostPopular});
        case actionTypes.FILTERED_MOST_POPULAR_FAIL:
            return updateObject(state, {loading:null,error:true});

        case actionTypes.GET_POPULAR_MOVIES_START:
            return updateObject(state, {loading:true, error:null});
        case actionTypes.GET_POPULAR_MOVIES_SUCCESS:
            return updateObject(state, {
                loading:null,
                popularMovies: action.popularMovies
            });
        case actionTypes.GET_POPULAR_MOVIES_FAIL:
            return updateObject(state, {loading:null, error:true});

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
