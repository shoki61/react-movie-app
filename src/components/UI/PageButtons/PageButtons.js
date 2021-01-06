import React from 'react';
import {BsArrowRightShort, BsArrowLeftShort} from "react-icons/bs";

import './PageButtons.css';
import Button from '../Button/Button';

const pageButtons = props => (
    <div className='Page-Button-Container'>
        {
            props.page > 1 &&
            <Button btnType='Page-Button' clicked={props.preview}>
                <BsArrowLeftShort style={{fontSize:20}}/> Page {props.page-1}
            </Button>
        }
        <Button btnType='Page-Button' clicked={props.next}>
            Page {props.page+1} <BsArrowRightShort style={{fontSize:20}}/>
        </Button>
    </div>
);

export default pageButtons;
