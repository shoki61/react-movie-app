import React from 'react';

import './List.css';
import Image from '../UI/Image/Image';

const list = props => (
    <div className='List'>
        <p className='List-Title'>{props.title}<span className='List-Count'>({props.count})</span></p>
        <div className='List-Items-Container'>
            {
                props.data ?
                    props.data.map(item => (
                        <div onClick={()=> props.clicked(item.id)} className='List-Item-Container'>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${item.profile_path ? item.profile_path : item.poster_path}`}
                                alt='image'
                                className={['List-Image',props.override].join(' ')}
                            />
                            <div>
                                <p className='List-Name'>{item.title}</p>
                                { item.character?<p className='List-who'>{item.character}</p>:null}
                                { item.department?<p className='List-who'>{item.department}</p>:null}
                            </div>
                        </div>
                    ))
                    :props.productionCompanies.map(item => (
                        <div onClick={()=> props.clicked()} className='List-Item-Container'>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}
                                alt='image'
                                className={['List-Image',props.override].join(' ')}
                            />
                            <div>
                                <p className='List-Name'>{item.name}</p>
                            </div>
                        </div>
                    ))
            }
        </div>
    </div>
);

export default list;
