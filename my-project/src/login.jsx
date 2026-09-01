import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="logo">Instagram</h1>
        <form>
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <button className="fb-login">Log in with Facebook</button>
        <p className="forgot">Forgot password?</p>
      </div>
      <div className="signup-box">
        <p>
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
