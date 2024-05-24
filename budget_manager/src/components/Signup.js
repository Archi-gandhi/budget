import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleCancelSignup = () => {
    // Implement modal hide functionality here
    console.log('Signup cancelled');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement signup logic here
    console.log('Signing up:', { email, password, confirmPassword, rememberMe });
  };

  return (
    <div className="container">
      {/* <h1>Budget Management App SIGNUP</h1>
      <p>Please fill in this form to create an account.</p>
      <hr /> */}
      <form onSubmit={handleSubmit}>
      <h1>Budget Management App SIGNUP</h1>
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <label htmlFor="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />

        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
            name="remember"
          />{' '}
          Remember me
        </label>

        <p>
          By creating an account you agree to our{' '}
          <a href="#">Terms & Privacy of our car rental website.</a>
        </p>

        <div className="clearfix">
          <button type="button" className="cancelbtn" onClick={handleCancelSignup}>
            Cancel
          </button>
          <button type="submit" className="signupbtn">
            Sign Up for visiting our Budget Management App
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
