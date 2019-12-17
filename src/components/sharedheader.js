import React from 'react';
import { Link, withRouter } from "react-router-dom"


function Sharedheader() {
  
  return (
    
      <header className="main_menu home_menu">
      <div className="container">
      <div className="row align-items-center">
      <div className="col-lg-12">
     <nav className="navbar navbar-expand-lg navbar-light">
     <a className="navbar-brand" href="index.html"> <img src="../img/logonew.png" alt="logo"/> </a>
     <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse main-menu-item justify-content-end"
                      id="navbarSupportedContent">
                       <ul className="navbar-nav align-items-center ">
                              <li className="nav-item active">
                              <a className="nav-link" href="index.html">Home</a>
                              </li>

                               <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     Manage Your Studies
                                  </a>
                                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                     <a className="dropdown-item" href="Library.html">Library</a>
                                      <a className="dropdown-item" href="Syllabus.html">Syllabus</a>
                                       <a className="dropdown-item" href="Time-Table.html">Time Table</a>
                                      <a className="dropdown-item" href="Notes.html">Notes</a>
                                       
                             </div>
                              </li>

                               <li className="nav-item dropdown">
                               <a className="nav-link dropdown-toggle" href="#" id="A1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               Test Section
                                  </a>
                                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a className="dropdown-item" href="current-test.html">Current Tests</a>
                                      <a className="dropdown-item" href="test-history.html">Test History</a>
                                      <a className="dropdown-item" href="upcoming-test.html">Upcoming Tests</a>
                                      
                                  </div>
                              </li>

                              <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="A2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Performance Analysis
                                  </a>
                                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a className="dropdown-item" href="overall-analysis.html">Overall Analysis</a>
                                      <a className="dropdown-item" href="sectional-analysis.html">Sectional Analysis</a>
                                      <a className="dropdown-item" href="prd.html">PRD</a>
                                      
                                  </div>
                              </li>

                               <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" id="A3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   Know Your School
                                  </a>
                                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a className="dropdown-item" href="teacher.html">Teachers List</a>
                                      <a className="dropdown-item" href="upcoming-event.html">Upcoming Events</a>
                                      
                                  </div>
                              </li>

                               {/* <li className="nav-item"> */
                               /* <a className="nav-link" href="study-group.html">Login&SignUp</a> */
                               /* <Link className="nav-link" to={`/Login`}>Login&SignUp</Link>
                              </li> */}
                               <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" id="A4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Account
                                  </a>
                                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    
                                      <Link className="dropdown-item" to={`/login`}>Login</Link>
                                      <Link className="dropdown-item" to={`/signup`}>Sign-Up</Link>
                                     
                                      
                                  </div>
                              </li>

                          
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
      </div>
    
  </header>

      
  );
}

export default withRouter(Sharedheader);