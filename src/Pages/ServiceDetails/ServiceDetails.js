import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {

    const { servicesId } = useParams()





    return (
        <div className='container service-detail'>
            <h2>This is Service Detail Page: {servicesId} </h2>

            <Link to="/checkout"> <button className='btn-primary'> Checkout </button> </Link>
        </div>
    );
};

export default ServiceDetails;