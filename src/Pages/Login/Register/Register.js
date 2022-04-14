import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }
    if (loading || updating) {
        return <Loading></Loading>
      }

    if (user) {
      console.log(user);  
    }
    const handleRegister = async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
          alert('Updated profile');
          navigate('/');

        

        

    }

    return (
        <div className='register-form'>
            <h2 className="text-primary text-center my-4">Please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />               
                <input type="email" name="email" id="" placeholder='Email Address' required/>              
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="trams" /> 
                {/* <label className={agree ? 'text-success' : 'text-danger'} htmlFor="terms" required><span className='ms-2'>Accept Genius Car Terms and Condition</span></label>            */}
                <label className={`${agree ? 'text-success' : 'text-danger'}`} htmlFor="terms" required><span className='ms-2'>Accept Genius Car Terms and Condition</span></label>           
                <input disabled={!agree} className='my-3' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' onClick={navigateLogin} className='text-warning pe-auto text-decoration-none'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;