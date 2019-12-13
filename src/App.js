import React from "react";
import "./App.css";
import Sharedheader from "./components/sharedheader";
import SharedFooter from "./components/SharedFooter";
import Index from "./components/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Account/Login";
import Signup from "./components/Account/Signup"
function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Sharedheader />
        <Route path="/" exact component={Index} />
        <Route path="/login" component={Login} />
        <Route path='/signup' component={Signup} /> 
        <SharedFooter />
      </Router>
      {/* //Index */}
    </div>
  );
}

export default App;
