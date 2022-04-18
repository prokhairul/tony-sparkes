import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../../Login/SocialLogin/SocialLogin';
import Loading from '../SocialLogin/Loading/Loading';



const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user, loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log("User Found", user)
    }


    // const nameRef = useRef('')
    // const emailRef = useRef('');
    // const passlRef = useRef('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        alert('Updated Profile')
        navigate('/home')

    }



    return (
        <div className='container login-main'>
            <div className='login-form'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter Your Name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <p>Already Registered? <Link to='/login' className='text-primary text-decoration-none pe-auto' onClick={navigateLogin}>Login Here!</Link> </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>


    );
};

export default Register;