import React from 'react';
import {Link ,withRouter} from 'react-router-dom'
function Login() {
  
  return (
      <div>
    <section className="breadcrumb breadcrumb_bg" style={{marginTop: "0px ! important"}}>
    <div className="container">
    <div className="row">
   <div className="col-lg-12">
    <div className="breadcrumb_iner text-center">
      <div className="breadcrumb_iner_item">
     <h2>Login</h2>
     <p>
         {/* <a href="index.html" className="clickherecolr"> Home</a> */}
         <Link className="clickherecolr"  to={`/`}>Home</Link>
         <span>/ Login</span></p>
     </div>
   </div>
   </div>
   </div>
    </div>
    </section>
 

    <section className="blog_area section_padding">
     <div className="container">
            <div className="row">
               

                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="blog_right_sidebar">
                       
                        <aside className="single_sidebar_widget newsletter_widget">
                        <h4 className="widget_title">LOGIN NOW</h4>
                      
                            <form action="#">
                           
                                <div className="form-group">
								
									<label>User Name</label>
									<input name="name" type="text" required="" className="form-control" placeholder="Your Name"/>
								
							</div>

                                 <div className="form-group">
								
									<label>Password</label>
									<input name="password" type="password" className="form-control" required="" placeholder="Password"/>
								
							</div>

                              

                                <button className="button rounded-0 primary-bg text-white w-100 btn_1"
                                    type="submit">Login</button>
                            </form>

                         
                          
                        </aside>
                    </div>
                </div>

                  <div className="col-lg-4"></div>


            </div>
        </div>
    </section>
    </div>

  )
}

export default withRouter(Login);