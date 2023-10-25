import React from "react";
import './style.css';
import Signin from "./Signin/Index";
import Signup from "./Signup/Index";

export default function Auth() {
  return (
    <>
    <div className="login_body">
      <div className="main">
        <input className='login_input' type="checkbox" id="chk" aria-hidden="true" />
        {/* <div className="signup">
          <form>
            <label className='login_label' htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input className='login_input' type="text" name="txt" placeholder="Full Name" required />
            <input className='login_input' type="email" name="email" placeholder="Email" required />
            <input className='login_input'
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <input className='login_input'
              type="password"
              name="pswd"
              placeholder="Confirm Password"
              required
            />
            <button className='login_button'>Sign up</button>
          </form>
        </div> */}
        <Signup/>
        <Signin/>
        {/* <div className="login">
          <form>
            <label className='login_label' htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input className='login_input' type="email" name="email" placeholder="Email" required />
            <input className='login_input'
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <button className='login_button'>Login</button>
          </form>
        </div> */}
      </div>
      </div>
    </>
  );
}
