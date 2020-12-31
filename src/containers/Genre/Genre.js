import React, { Component } from 'react';

import './Genre.css';
import GenreList from '../../components/GenreList/GenreList';

class Genre extends Component{
    goDetail = () => this.props.history.push('/detail')
    render(){
        return(
            <div className='Genre'>
                <GenreList
                    clicked={this.goDetail}
                    title='Action'
                />
            </div>
        );
    };
};

export default Genre;
