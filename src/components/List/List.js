import React from 'react';

import './List.css';
import Image from '../UI/Image/Image';

const list = props => (
    <div className='List'>
        <p className='List-Title'>{props.title}<span className='List-Count'>({props.count})</span></p>
        <div className='List-Items-Container'>
            <div className='List-Item-Container'>
                <Image
                    src={props.src}
                    alt='image'
                    className={['List-Image',props.override].join(' ')}
                />
                <div>
                    <p className='List-Name'>{props.name}</p>
                    <p className='List-who'>{props.who}</p>
                </div>
            </div>
            <div className='List-Item-Container'>
                <Image
                    src={props.src}
                    alt='image'
                    className={['List-Image',props.override].join(' ')}
                />
                <div>
                    <p className='List-Name'>{props.name}</p>
                    <p className='List-who'>{props.who}</p>
                </div>
            </div>
            <div className='List-Item-Container'>
                <Image
                    src={props.src}
                    alt='image'
                    className={['List-Image',props.override].join(' ')}
                />
                <div>
                    <p className='List-Name'>{props.name}</p>
                    <p className='List-who'>{props.who}</p>
                </div>
            </div>
        </div>
    </div>
);

export default list;
