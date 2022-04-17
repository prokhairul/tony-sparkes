import React from 'react';
import './About.css'
import khairul from '../../images/about-me/khairul.png'

const About = () => {


    return (

        <div className='aboutus-main container'>

            <div className='aboutus-img'>
                <img src={khairul} alt="" />
            </div>
            <div className='aboutus-title'>
                <h2>Md. Khairul Islam</h2>
                <p>Hello, Welcome to my Wildlife website. I'm Khairul Islam, a junior web develper. Currently trying to improve my web development skill. Already joined Full Stack Web Development Corse By Jhankar Mahbub Sir. I am always doing that which I cannot do, in order that I may learn how to do it. I know how to find any possible solutions through online properly.  I always try to research and find out the best solutions for my project. I'm a good learner and my future plan is to became a full stack web developer </p>
            </div>



        </div>
    );
};

export default About;