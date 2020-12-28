import React from 'react';

import './List.css';
import Image from '../UI/Image/Image';

const list = props => (
    <div className='List'>
        <p className='List-Title'>{props.title}</p>
        <div className='List-Item-Container'>
            <Image
                src={props.src}
                alt='image'
                width={75}
                height={85}
                className='List-Image'
            />
            <div>
                <p>{props.name}</p>
                <p>{props.who}</p>
            </div>
        </div>
    </div>
);

export default list;
