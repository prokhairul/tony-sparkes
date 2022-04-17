import React from 'react';
import './Service.css'

const Service = ({ service }) => {

    const { name, price, img, description, size } = service;



    return (
        <div className='service'>
            <h5>{name}</h5>
            <img src={img} alt="Services" />
            <p>{description}</p>
            <p>{size}</p>
            <h6>Price: ${price}</h6>
            <button className='service-btn'>Purchase</button>
        </div>
    );
};

export default Service;