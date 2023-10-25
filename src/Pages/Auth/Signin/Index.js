import React from "react";


export default function Signin(){
    return(
        <>
        <div className="login">
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
        </div>
        </>
    )
}