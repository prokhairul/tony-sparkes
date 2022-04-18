import React from 'react';
import { Accordion } from 'react-bootstrap';

import './Blogs.css'

const Blogs = () => {

    return (
        <div className='container blog-item'>

            <h5>Question's And Answer </h5>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication!</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            <span>Authentication:</span> <br />

                            1. 	In authentication process, the identity of users are checked for providing the access to the system. <br />
                            2. 	In authentication process, users or persons are verified. <br />
                            3.  It is done before the authorization process. <br />
                            4.  It needs usually user's login details. <br />
                            5.  Authentication determines whether the person is user or not.

                            <br /> <br />

                            <span>Authorization:</span> <br />

                            1. 	While in authorization process, person’s or user’s authorities are checked for accessing the resources. <br />
                            2. 	While in this process, users or persons are validated. <br />
                            3.  While this process is done after the authentication process. <br />
                            4.  While it needs user’s privilege or security levels. <br />
                            5.  While it determines What permission do user have?


                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                        <p>There are many services which Firebase provides, Most useful of them are: <br /><br />

                            <span>Cloud Firestore</span><br />
                            <span>Cloud Functions</span><br />
                            <span>Authentication</span><br />
                            <span>Hosting</span><br />
                            <span>Cloud Storage</span> <br />
                            <span>Predictions</span> <br />
                            <span>Cloud Messaging</span><br />
                            <span>Dynamic Links</span> <br />
                            <span>Remote Config</span>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>


        </div>
    );
};

export default Blogs;