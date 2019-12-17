import React , { Component }  from "react";
import "./App.css";
import Sharedheader from "./components/sharedheader";
import SharedFooter from "./components/SharedFooter";
import Index from "./components/index";
import { BrowserRouter as Router, Route,Switch ,Redirect } from "react-router-dom";
import Login from "./components/Account/Login";
import Signup from "./components/Account/Signup"

export default class App extends  Component {
  render(){    
  return (
    <div className="container-fluid">
      <Router>
      {console.log(window.location.pathname)}
      <Switch>
         
          <Route path="/" component={this.LoginContainer} />
         <Route  component={this.DefaultContainer}></Route>
       
     
        </Switch>
      </Router>
      {/* //Index */}
    </div>
  );
  const LoginContainer = () => (
    <div className="container">
      <Route exact path="/" render={() => <Redirect to="/Login" />} />
      <Route path="/Login" component={Login} />
    </div>
  )
  const DefaultContainer  =()=>(
    <div className="container">
    <Sharedheader />        
    <Route path="/" exact component={Index} />
    <Route path="/signup" component={Signup} />
    <SharedFooter />
    </div>
  )
    }
   
}



// export default App;
