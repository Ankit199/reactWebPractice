import React , { Component }  from "react";
import "./App.css";
import Sharedheader from "./components/sharedheader";
import SharedFooter from "./components/SharedFooter";
import Index from "./components/index";
import { BrowserRouter as Router, Route,Switch ,Redirect,withRouter  } from "react-router-dom";
import Login from "./components/Account/Login";
import Signup from "./components/Account/Signup"

export default class App extends  Component {
  render(){    
    const LoginContainer = () => (
      <div >
         <Route path="/account/login"  component={Login} />
        {/* <Route path="/account/signup" component={Signup} /> */}
        <Route exact  path="/login" render={  () =>  ( <Redirect from="/login" to="/account/login" />) } />
        {/* <Route exact  path="/signup" render={ () => (<Redirect to="/account/signup" />) } /> */}
       
      </div>
    )
    const DefaultContainer  =()=>(
      <div >
      <Sharedheader />        
      <Route path="/" exact component={Index} />
     
      <SharedFooter />
      </div>
    )
  return (
    <div className="container-fluid">
      <Router>
      {console.log(window.location.pathname)}
       <Switch>
   
          <Route path="/login" component={withRouter(LoginContainer)} />
          <Route path="/signup" component={withRouter(LoginContainer)} />
         <Route path="/" component={withRouter(DefaultContainer)}></Route>
       
     
         </Switch> 
      </Router>
     
    </div>
    
  );
  
    }
   
}



// export default App;
