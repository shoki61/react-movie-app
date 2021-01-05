import React from 'react';

import './GenreList.css';
import PageButton from '../UI/PageButtons/PageButtons';
import Spinner from '../UI/Spinner/Spinner';

const genreList = props => (
    <div className='Container'>
        <p className='Title'>{props.title} Movies</p>
        <div className='List-Container'>
            {
                 props.popularList.results
                     ? props.popularList.results.map(item => (
                         <div onClick={()=> props.clicked()} className='Movie-Container'>
                             <div
                                style={{
                                    background:`url('https://image.tmdb.org/t/p/w500${item.poster_path}') no-repeat center`,
                                    backgroundSize:'cover',
                                    borderRadius:7,
                                    width:175,
                                    height:265
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
