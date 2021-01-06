import React from 'react';

import './GenreList.css';
import PageButton from '../UI/PageButtons/PageButtons';
import Spinner from '../UI/Spinner/Spinner';

const genreList = props => (
    <div className='Container'>
        <p className='Title'>{props.title} Movies</p>
        <div className='List-Container'>
            {
                 props.movieList.results
                     ? props.movieList.results.map(item => (
                         <div onClick={()=> props.clicked()} className='Movie-Container'>
                             <div
                                 className='Genre-Poster-Img'
                                 style={{
                                     background:`url('https://image.tmdb.org/t/p/w500${item.poster_path}') no-repeat center`,
                                     backgroundSize: 'cover'
                                 }}
                             >
                             </div>
                             <div className='Movie-Vote-Container'>
                                 <p className='Movie-Star-Icon'>
                                     <i className='fas fa-star' />
                                 </p>
                                 <div>
                                     <p className='Movie-Vote-Average'>{item.vote_average}</p>
                                 </div>
                             </div>
                             <p className='Movie-Title'>{item.title}</p>
                         </div>
                     ))
                     : <Spinner/>
            }
        </div>
        <PageButton/>
    </div>
);

export default genreList;
