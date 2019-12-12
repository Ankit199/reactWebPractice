import React from 'react';

function Sharedheader() {
  
  return (
    
      <header class="main_menu home_menu">
      <div class="container">
      <div class="row align-items-center">
      <div class="col-lg-12">
     <nav class="navbar navbar-expand-lg navbar-light">
     <a class="navbar-brand" href="index.html"> <img src="img/logonew.png" alt="logo"/> </a>
     <button class="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>

                      <div class="collapse navbar-collapse main-menu-item justify-content-end"
                      id="navbarSupportedContent">
                       <ul class="navbar-nav align-items-center ">
                              <li class="nav-item active">
                              <a class="nav-link" href="index.html">Home</a>
                              </li>

                               <li class="nav-item dropdown">
                                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     Manage Your Studies
                                  </a>
                                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                     <a class="dropdown-item" href="Library.html">Library</a>
                                      <a class="dropdown-item" href="Syllabus.html">Syllabus</a>
                                       <a class="dropdown-item" href="Time-Table.html">Time Table</a>
                                      <a class="dropdown-item" href="Notes.html">Notes</a>
                                       
                             </div>
                              </li>

                               <li class="nav-item dropdown">
                               <a class="nav-link dropdown-toggle" href="#" id="A1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               Test Section
                                  </a>
                                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a class="dropdown-item" href="current-test.html">Current Tests</a>
                                      <a class="dropdown-item" href="test-history.html">Test History</a>
                                      <a class="dropdown-item" href="upcoming-test.html">Upcoming Tests</a>
                                      
                                  </div>
                              </li>

                              <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" id="A2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Performance Analysis
                                  </a>
                                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a class="dropdown-item" href="overall-analysis.html">Overall Analysis</a>
                                      <a class="dropdown-item" href="sectional-analysis.html">Sectional Analysis</a>
                                      <a class="dropdown-item" href="prd.html">PRD</a>
                                      
                                  </div>
                              </li>

                               <li class="nav-item dropdown">
                                  <a class="nav-link dropdown-toggle" href="#" id="A3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   Know Your School
                                  </a>
                                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a class="dropdown-item" href="teacher.html">Teachers List</a>
                                      <a class="dropdown-item" href="upcoming-event.html">Upcoming Events</a>
                                      
                                  </div>
                              </li>

                               <li class="nav-item">
                               <a class="nav-link" href="study-group.html">My Study Groups</a>
                              </li>
                               <li class="nav-item dropdown">
                                  <a class="nav-link dropdown-toggle" href="#" id="A4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Feed Back
                                  </a>
                                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <a class="dropdown-item" href="about-feedback.html">About TLA</a>
                                      <a class="dropdown-item" href="about-test.html">About Tests</a>
                                      
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

export default Sharedheader;