import React from 'react';
import {Link,withRouter } from 'react-router-dom'
function Signup() {
  return(
<div>
<section className="breadcrumb breadcrumb_bg" style={{marginTop: "0px ! important"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb_iner text-center">
                        <div className="breadcrumb_iner_item">
                            <h2>Register</h2>
                            <p>
                            <Link className="clickherecolr"  to={`/`}>Home</Link>
                                {/* <a href="index.html" class="clickherecolr"> Home</a> */}
                                <span>/ Register</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="blog_area section_padding registersection">
   <div className="container">
   <div className="row">

       <div className="signup-form">
    <form action="#" >
		<h2>REGISTER</h2>
		<p className="hint-text">Create your account. It's free and only takes a minute.</p>
        <div className="form-group">
			<div className="row">
				<div className="col-md-6"><input type="text" className="form-control" name="first_name" placeholder="First Name" required="required"/></div>
				<div className="col-md-6"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
			</div>        	
        </div>
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
        </div>        
        <div className="form-group">
			<label className="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div className="form-group">
            <button type="submit" className="btn btn_2 btn-lg btn-block">Register Now</button>
        </div>
    </form>
	<div className="text-center">Already have an account? 
    
    <Link className="clickherecolr" exact to={`/Login`}>Sign in</Link>
    </div>
</div>
    
 


            </div>
        </div>
    </section>
</div>
  )
}
export default withRouter(Signup);