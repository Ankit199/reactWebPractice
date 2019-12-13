import React from 'react';
import {Link } from 'react-router-dom'
function Signup() {
  return(
<div>
<section class="breadcrumb breadcrumb_bg" style={{marginTop: "0px ! important"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb_iner text-center">
                        <div class="breadcrumb_iner_item">
                            <h2>Register</h2>
                            <p>
                            <Link className="clickherecolr" exact to={`/`}>Home</Link>
                                {/* <a href="index.html" class="clickherecolr"> Home</a> */}
                                <span>/ Register</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="blog_area section_padding registersection">
   <div class="container">
   <div class="row">

       <div class="signup-form">
    <form action="#" >
		<h2>REGISTER</h2>
		<p class="hint-text">Create your account. It's free and only takes a minute.</p>
        <div class="form-group">
			<div class="row">
				<div class="col-md-6"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required"/></div>
				<div class="col-md-6"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
			</div>        	
        </div>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email" required="required"/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
        </div>        
        <div class="form-group">
			<label class="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn_2 btn-lg btn-block">Register Now</button>
        </div>
    </form>
	<div class="text-center">Already have an account? 
    {/* <a href="#" class="clickherecolr">Sign in</a> */}
    <Link className="clickherecolr" exact to={`/Login`}>Sign in</Link>
    </div>
</div>
    
 


            </div>
        </div>
    </section>
</div>
  )
}
export default Signup;