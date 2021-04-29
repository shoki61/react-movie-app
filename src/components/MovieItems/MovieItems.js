import React from 'react';

import './MovieItems.css';
import PageButton from '../UI/PageButtons/PageButtons';
import Spinner from '../UI/Spinner/Spinner';
import MovieItem from './MovieItem/MovieItem';

const MovieItems = props => {
    const clickHandler = (value, id) => {
        props.clicked(value, id);
    };
    if(!props.movieList?.length){
        return <h2 style={{textAlign:'center', color:'#696969'}}>No result</h2>
    };
    return (<div className='Container'>
        <p className='Title'>{props.title}</p>
        <div className='List-Container'>
            {props.movieList
                ? props.movieList.map(item => (
                    <MovieItem
                        clickHandler={clickHandler}
                        title={item.title}
                        name={item.name}
                        id={item.id}
                        gender={item.gender}
                        poster_path={item.poster_path}
                        profile_path={item.profile_path}
                        vote_average={item.vote_average}
                    />
                ))
                : <Spinner/>
            }
        </div>
        {props.page && <PageButton next={props.nextPage} preview={props.previewPage} page={props.page}/>}
    </div>);
};

export default MovieItems;
