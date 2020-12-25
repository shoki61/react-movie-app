import React from 'react';

import './Image.css';

const image = props => (
    <img
        className={props.className}
        height={props.height}
        width={props.width}
        src={require(props.src).default}
        alt={props.alt}
    />
);

export default image;
