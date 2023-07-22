import React, { useState } from "react";
import "./SignInPage.css";

const SignInPage = ({ handleSignIn, handleGoogleSignIn, handleFacebookSignIn, isLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAccountOpened, setIsAccountOpened] = useState(false); // State to track if the account is opened

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(email, password);
    // Reset form fields after submission if needed
    setEmail("");
    setPassword("");
    setIsAccountOpened(true); // Set the state to true when the sign-in button is clicked
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
    console.log("Forgot password");
    // Redirect or show options to sign in with Google or Facebook
  };

  // Render different content based on the user's authentication status
  if (isLoggedIn) {
    // User is logged in, render a welcome message or redirect to another page
    return <div>Welcome back, user!</div>;
  }

  return (
    <div className="sign-in-container">
      {isAccountOpened && <div className="account-opened-message">Account Opened!</div>}
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
        <button type="button" onClick={handleForgotPassword}>Forgot Password</button>
      </form>
      <div className="alternative-sign-in">
        <p>Or sign in with:</p>
        <button className="google-sign-in" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
        <button className="facebook-sign-in" onClick={handleFacebookSignIn}>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
