import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "./../../images/googleLogo/google.png";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement = "";
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="text-center mt-3">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline-primary w-75 rounded-pill mb-3"
      >
        <img src={google} alt="" />
        <span className="fs-5 ms-2">Sign in with Google</span>
      </button>
      {errorElement}
    </div>
  );
};

export default SocialLogin;
