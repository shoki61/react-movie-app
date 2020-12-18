import React from 'react';

import './Link.css';

const link = props => (
    <a
        className='Link'
        style={{fontSize:props.size,color:props.color}}
        title={props.title}
        href={props.url}
        rel="noreferrer"
        target='_blank'
    >
        {props.children}
    </a>
);

export default link;
