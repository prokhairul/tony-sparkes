import React from 'react';
import './SocialLogin.css'
import google from '../../../images/google.png'
import github from '../../../images/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    let errorElement;

    if (error || giterror) {
        errorElement = <div> <p className='text-danger'> {error?.message} {giterror?.message}</p> </div>
    }

    if (user || gituser) {
        navigate('/home')
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}

            <div className='btn-main'>
                <button onClick={() => signInWithGoogle()} className='button-style btn btn-light d-block w-100'>
                    <img style={{ width: '30px' }} src={google} alt="Google Sign In" />
                    <span className='px-2'>Google</span>
                </button>
                <button onClick={() => signInWithGithub()} className='button-style btn btn-light d-block w-100'>
                    <img style={{ width: '30px' }} src={github} alt="Github Sign In" />
                    <span className='px-2'>Github</span>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;