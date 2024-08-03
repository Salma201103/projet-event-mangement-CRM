import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "../../assets/styles/style.css";
import regImg from "../../assets/img/Register.svg"

const Auth = () => {
  const [signUpMode, setSignUpMode] = useState(false);

  return (
    <div className="auth-page">
      <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <SignIn />
            <SignUp />
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btn transparent"
                onClick={() => setSignUpMode(true)} // Toggles to sign-up mode
              >
                Sign up
              </button>
            </div>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="image"
              alt=""
            />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                onClick={() => setSignUpMode(false)} // Toggles to sign-in mode
              >
                Sign in
              </button>
            </div>
            <img src={regImg} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
