import React from 'react';

import Image from '../../UI/Image/Image';
import './MovieItem.css';

const MovieItem = props => {
    const { id, title, name, gender, poster_path, profile_path, vote_average, clickHandler } = props;
    return(
        <div
            key={id}
            onClick={()=> clickHandler(title ? 'movie' : gender ? 'person': 'tv', id)}
            className='Movie-Container'
        >
            <Image
                src={`https://image.tmdb.org/t/p/w500${poster_path ?? profile_path}`}
                alt='image'
                className='Movie-List-Poster'
            />
            <div className='Movie-Vote-Container'>
                <p className='Movie-Star-Icon'>
                    <i className='fas fa-star' />
                </p>
                <div>
                    <p className='Movie-Vote-Average'>{vote_average}</p>
                </div>
            </div>
            <p className='Movie-Title'>{title ?? name}</p>
        </div>
    );
};

export default MovieItem;