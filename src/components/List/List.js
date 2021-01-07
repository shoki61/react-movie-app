import React from 'react';

import './List.css';
import Image from '../UI/Image/Image';

const list = props => (
    <div className='List'>
        <p className='List-Title'>{props.title}<span className='List-Count'>({props.count})</span></p>
        <div className='List-Items-Container'>
            {
                props.data.map(item => (
                    <div onClick={()=> props.clicked()} className='List-Item-Container'>
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                            alt='image'
                            className={['List-Image',props.override].join(' ')}
                        />
                        <div>
                            <p className='List-Name'>{item.name}</p>
                            <p className='List-who'>{item.known_for_department}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
);

export default list;
