import React from "react";



export default function Signup(){
    return(
        <>
        
         <div className="signup">
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
        </div>
        </>
    )
}