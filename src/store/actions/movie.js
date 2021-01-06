import * as actionTypes from './actionTypes';
import axios from '../../axios';
import { APIKey } from '../../env';


const popularMoviesStart = () => {
    return{
        type: actionTypes.GET_POPULAR_MOVIES_START
    };
};

const popularMoviesSuccess = (data, value) => {
    return {
        type: actionTypes.GET_POPULAR_MOVIES_SUCCESS,
        popularMovies: data,
        page:value
    };
};

const popularMoviesFail = () => {
    return {
        type:actionTypes.GET_POPULAR_MOVIES_FAIL
    };
};


const filteredMostPopular = data => {
    return{
        type: actionTypes.FILTERED_MOST_POPULAR,
        filteredMostPopular: data
    };
};


const extractMostPopular = () => {
    return dispatch => {
        axios.get(`/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
            .then(response=>{
                const temp = [];
                response.data.results.filter(item => {
                    if(item.vote_average > 7.5){
                        temp.push({
                            movie:item
                        })
                    };
                });
                dispatch(filteredMostPopular(temp));
            })
            .catch(error=>{
            });
    };
}


const getPopularMovies = value => {
    return dispatch => {
        dispatch(popularMoviesStart());
        axios.get(`/movie/popular?api_key=${APIKey}&language=en-US&page=${value}`)
            .then(response=>{
                dispatch(popularMoviesSuccess(response.data, value))
            })
            .catch(error=>{
                dispatch(popularMoviesFail())
            });
    };
};



export {
    getPopularMovies,
    extractMostPopular
};
