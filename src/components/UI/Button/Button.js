import React from 'react';

import './Button.css';

const button = props => (
    <button
        type={props.type}
        onClick={props.clicked}
        className={['Button',props.btnType].join(' ')}>
        { props.children }
    </button>
);

export default button;
