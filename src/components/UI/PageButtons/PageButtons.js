import React from 'react';

import './PageButtons.css';
import Button from '../Button/Button';

const pageButtons = props => (
    <div className='Page-Button-Container'>
        <Button btnType='Page-Button'>
            Previous
        </Button>
        <Button btnType='Page-Button'>
            Next
        </Button>
    </div>
);

export default pageButtons;
