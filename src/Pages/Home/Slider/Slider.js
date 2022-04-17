import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'
import slider from '../../../images/slider/slider.jpg'

const Slider = () => {
    return (
        <div className='slider-img'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>TONY SPARKES <br /> WILDLIFE PHOTOGRAPHY</h3>
                        <p>Award-winning Photography</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;