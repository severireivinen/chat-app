import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to MyChat!</h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <AiOutlineGoogle /> Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
