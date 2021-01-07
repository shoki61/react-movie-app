import React from 'react';

import './GenreList.css';
import PageButton from '../UI/PageButtons/PageButtons';
import Spinner from '../UI/Spinner/Spinner';
import Image from '../UI/Image/Image';

const genreList = props => (
    <div className='Container'>
        <p className='Title'>{props.title} Movies</p>
        <div className='List-Container'>
            {
                 props.movieList.results
                     ? props.movieList.results.map(item => (
                         <div
                             key={item.id}
                             onClick={()=> props.clicked(item.id)}
                             className='Movie-Container'
                         >
                             <Image
                                 src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                 alt='image'
                                 className='Movie-List-Poster'
                             />
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
        <PageButton next={props.nextPage} preview={props.previewPage} page={props.movieList.page}/>
    </div>
);

export default genreList;
