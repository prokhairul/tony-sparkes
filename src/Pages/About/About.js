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
                <h2>Tony Sparkes</h2>
                <p> Tony Sparkes is a Professional wildlife photographer based in Lillehammer, in the centre of southern Norway. He is an elected member of the Norwegian Nature Photographers Association/NN, a prestigious association of professional nature photographers. In 2017 Arnfinn founded Oltepesi Tented Safari Camp, an eco safari camp located in Maasai Mara in Kenya, to meet professional wildlife photographers’ and nature photo enthusiasts’ needs. Arnfinn also is a photo guide for Zoom Fotoresor, Africa Geographic, and NaturesLens. His images are represented internationally by NTB Scanpix news and photo agency, the leading visual content supplier in Scandinavia. </p>
            </div>



        </div>
    );
};

export default About;