import React from 'react';
import WhatsAppLogo from "../Media/WhatsApp.svg.webp";
import db, { auth, googleProvider } from "../firebase";
import googleLogo from "../Media/google_logo.png";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        const newUser = {
          fullName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        navigate("/");

        setUser(newUser);
        localStorage.setItem('user',JSON.stringify(newUser));
        db.collection("users").doc(result.user.email).set(newUser);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login-container">
        <img className="login-logo" src={WhatsAppLogo} alt="whatsapp logo" />
        <p className="login-name">Whatsapp Web</p>
        <button className="login-btn" onClick={signInWithGoogle}>
          <img src={googleLogo} alt="login with google" />
          Login With Google
        </button>
      </div>
    </div>
  );
}

export default Login