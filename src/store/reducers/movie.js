import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helper/utility';

const initialState = {
    searchTitle:null,
    movieDetail:null,
    peopleDetail:null,
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
            return updateObject(state, {loading: true});
        case actionTypes.FILTERED_MOST_POPULAR_SUCCESS:
            return updateObject(state, {filteredMostPopular: action.filteredMostPopular});
        case actionTypes.FILTERED_MOST_POPULAR_FAIL:
            return updateObject(state, {error:true});
        case actionTypes.GET_POPULAR_MOVIES:
            return updateObject(state, {popularMovies: action.popularMovies});
        case actionTypes.GET_MOVIE_DETAIL:
            return updateObject(state, {movieDetail: action.movieDetail});
        case actionTypes.GET_PEOPLE_DETAIL:
            return updateObject(state, {peopleDetail:action.peopleDetail});
        default:return state;
    };
};

export default reducer;
