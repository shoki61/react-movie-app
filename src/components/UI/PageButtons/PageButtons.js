import React from 'react';
import {BsArrowRightShort, BsArrowLeftShort} from "react-icons/bs";

import './PageButtons.css';
import Button from '../Button/Button';

const pageButtons = props => (
    <div className='Page-Button-Container'>
        <Button btnType='Page-Button'>
            <BsArrowLeftShort style={{fontSize:20}}/> Previous
        </Button>
        <Button btnType='Page-Button'>
            Next <BsArrowRightShort style={{fontSize:20}}/>
        </Button>
    </div>
);

export default pageButtons;
