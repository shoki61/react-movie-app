import React from 'react';

import './Input.css';

const input = props => (
    <input
        className={['Input',props.inputType].join(' ')}
        value={props.value}
        onChange={props.changed}
        placeholder={props.placeholder}
    />
);


export default input;
