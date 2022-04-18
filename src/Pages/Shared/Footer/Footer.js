import React from 'react';
import './Footer.css'

const Footer = () => {

    const today = new Date();

    const year = today.getFullYear();




    return (
        <div className='footer-design'>
            <p> &copy; Copyright {year} <strong>Tony Sparkes</strong> - All rights reserved</p>
        </div>
    );
};

export default Footer;