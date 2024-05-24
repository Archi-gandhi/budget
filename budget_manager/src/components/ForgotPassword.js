import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement password reset logic here
    console.log('Resetting password for:', email);
  };

  return (
    <div className="password-reset-container">
      <h2>Forgot Password</h2>
      <p>Please enter your email address below to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input type="submit" value="Reset Password" />
      </form>
    </div>
  );
}

export default ForgotPassword;
