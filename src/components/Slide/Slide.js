import React, { useEffect, useState } from 'react';

import './Slide.css';

const Slide = props => {
    const [value, setValue] = useState(1);

    const plusSlides = (v) => {
        if(value > 1 ) setValue(value-1);
    }
    const minusSlides = (v) => {
        if(value < 3 ){
            setValue(value+1);
        }
    }

    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) //{slideIndex = 1}
        if (n < 1) //{slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        //slides[slideIndex-1].style.display = "block";
        //dots[slideIndex-1].className += " active";
    }
    return (
        <div>
            <div className="slideshow-container">

                <div style={{width:'100%',backgroundColor:'red',position:'relative'}}>
                    <div className="mySlides fade" style={value===1 ? {display:'block'}:null}>
                        <div className="numbertext">1 / 3</div>
                        <img src={require('../../assets/backdrop.jpg').default} style={{width:'100%'}}/>
                        <div className="text">Caption Text</div>
                    </div>

                    <div className="mySlides fade" style={value===2 ? {display:'block'}:null}>
                        <div className="numbertext">2 / 3</div>
                        <img src={require('../../assets/backdrop.jpg').default} style={{width:'100%'}}/>
                        <div className="text">Caption Two</div>
                    </div>

                    <div className="mySlides fade" style={value===3 ? {display:'block'}:null}>
                        <div className="numbertext">3 / 3</div>
                        <img src={require('../../assets/backdrop.jpg').default} style={{width:'100%'}}/>
                        <div className="text">Caption Three</div>
                    </div>
                </div>

                <a className="prev" onClick={plusSlides}>&#10094;</a>
                <a className="next" onClick={minusSlides}>&#10095;</a>

            </div>
            <p>{value}</p>
        </div>
    );
};

export default Slide;
