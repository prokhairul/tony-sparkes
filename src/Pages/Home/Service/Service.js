import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { id, name, price, img, description, size } = service;
    const navigate = useNavigate()

    const navigateDetail = id => {
        navigate(`/services/${id}`)
    }

    return (
        <div className='service'>
            <h5>{name}</h5>
            <img src={img} alt="Services" />
            <p>{description}</p>
            <p>{size}</p>
            <h6>Price: ${price}</h6>
            <button onClick={() => navigateDetail(id)} className='service-btn'>Purchase</button>
        </div>
    );
};

export default Service;