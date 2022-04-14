import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
      return <Loading></Loading>
    }
    if (user) {
      navigate(from, { replace: true });
    }

    if (error) {
      errorElement = <p className="text-danger">Error: {error?.message}</p>              
    };

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async() => {
      const email = emailRef.current.value;
      if (email) {
        await sendPasswordResetEmail(email);
      toast('Sent Email');
      }
      else {
        toast('Please enter your email address')
      }

    }

  return (
    <div className='login-form container w-50 mx-auto'>
      <h2 className='text-info text-center my-4'>Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>        
        <Button variant="primary w-100" type="login">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>New to Genius Car? <Link to='/register' onClick={navigateRegister} className='text-warning pe-auto text-decoration-none'>Please Register</Link></p>
      <p>Forget Password? <button onClick={resetPassword} className='btn btn-link text-warning pe-auto text-decoration-none'>Reset Password</button></p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;