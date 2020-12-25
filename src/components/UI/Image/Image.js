import React from 'react';

import './Image.css';

const image = props => (
    <img
        className={props.className}
        style={{width:props.width,height:props.height}}
        src={props.src}
        alt={props.alt}
    />
);

export default image;
