import React, { useState } from 'react';

const AdminLogin = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`signcontainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" method="post" className="sign-in-form">
            <h2 className="title"> investor Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email Address" name="u_signin_email" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="u_signin_pass" required />
            </div>
            <input type="submit" value="Login" name="investor_signin" className="login-btn solid" />
          </form>
          <form action="" className="sign-up-form" method="post">
            <h2 className="title"> investor Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Full Name" name="u_signup_name" required />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email Address" name="u_signup_email" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="u_signup_password" required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" name="u_signup_cpassword" required />
            </div>
            <input type="submit" className="login-btn" name="investor_signup" value="Sign up" />
            <p>By Signing up, you will sign an <a href="/ideablenew/investor/nda.php">Non-Disclosure Agreement</a> with
              ideablenew. Click to learn more</p>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Register now and start experiencing your new journey with us!
            </p>
            <button className="panel-btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              What are you waiting for? Login now!
            </p>
            <button className="panel-btn transparent" id="sign-in-btn" onClick={ handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;