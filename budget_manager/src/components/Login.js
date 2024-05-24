import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const signInWithGoogle = () => {
  
    console.log('Signing in with Google');
  };

  const signInWithphonenumber = () => {
    
    console.log('Signing in with phone number');
  };

  return (
    <div className="login-container">
      <h2>Budget Management App Login</h2>
      <form action="#" method="post">
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="submit" value="Login" />
      </form>
      <div className="social-login">
        <h3>Sign Up with</h3>
        <button onClick={signInWithGoogle}>Google</button>
        <button onClick={signInWithphonenumber}>Phone Number</button>
      </div>
      <div className="forgot-password">
        <Link to="/forgot">Forgot Password?</Link>
      </div>
    </div>
  );
}

export default Login;
