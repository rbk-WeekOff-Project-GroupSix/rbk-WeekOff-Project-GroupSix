// importing used files and options
import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./App.css";
import Home from "./Home";
import Header from "./Components/Header/logo";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddExpenses from "./Components/AddExpenses";
import Expenses from "./Components/Expenses";
import user from "./Components/user";

// creat App Component
class App extends Component {
  state = { step: 1 };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // rendering firebase and then click on button to show our home page
  render() {
    const { step } = this.state;
    //Switch with cases
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <div className="App">
            <Router>
              <Header /> <br />
              <div className="App">
                <Navbar />
                <Route exact path="/" component={Landing} />
                <div className="container">
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/AddExpenses" component={AddExpenses} />
                  <Route exact path="/Expenses" component={Expenses} />
                  <Route exact path="/user" component={user} />
                  <Route exact path="/Home" component={Home} />
                </div>
              </div>
            </Router>
          </div>
        );
    }
  }
}

export default App;
