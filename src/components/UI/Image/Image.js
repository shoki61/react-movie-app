import React from 'react';

import './Image.css';

const image = props => (
    <img
        className={props.className}
        src={props.src}
        alt={props.alt}
    />
);

export default image;
