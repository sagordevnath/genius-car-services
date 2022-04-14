import React from "react";
import google from "../../../Images/social/google.png";
import github from "../../../Images/social/github.png";
import facebook from "../../../Images/social/facebook.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);    
    const navigate = useNavigate();

    let errorElement;

    if (error || error1) {
        errorElement = <p className="text-danger">Error: {error?.message} {error1.message}</p>          
      };
      if (loading || loading1) {
        return <Loading></Loading>
      }

      if(user || user1) {
          navigate('/')
      }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-light w-50"></div>
        <p className="mt-2 mx-3">OR</p>
        <div style={{ height: "2px" }} className="bg-light w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
        onClick={() => signInWithGoogle()}
        className="btn btn-info d-block mx-auto w-50">
          <img src={google} alt="" />
          <span className='mx-2'>Google Sign In</span>
        </button>
        <button className="btn btn-info d-block mx-auto w-50 my-2">
          <img src={facebook} alt="" />
          <span className='mx-2'>Facebook Sign In</span>
        </button>
        <button
        onClick={() => signInWithGithub()}
        className="btn btn-info d-block mx-auto w-50">
          <img src={github} alt="" />
          <span className='mx-2'>Github Sign In</span>
        </button>        
      </div>
    </div>
  );
};

export default SocialLogin;
