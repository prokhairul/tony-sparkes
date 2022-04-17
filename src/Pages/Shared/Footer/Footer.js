import React from 'react';

const Footer = () => {

    const today = new Date();

    const year = today.getFullYear();




    return (
        <div>
            <p> &copy; Copyright {year} <strong>Tony Sparkes</strong> - All rights reserved</p>
        </div>
    );
};

export default Footer;