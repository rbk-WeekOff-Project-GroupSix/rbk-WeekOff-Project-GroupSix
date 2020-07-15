// importing used files and options
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Home from "./Home";
import Header from "./Components/Header/logo";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Expenses from "./Components/Expenses";
import user from "./Components/user";

// initializing firebase
firebase.initializeApp({
  apiKey: "AIzaSyCKD1Uydm10LcXglQPGFWYqDDEuy1hAnu8",
  authDomain: "reactlogin-c308d.firebaseapp.com",
});

// creat App Component
class App extends Component {
  state = { isSignedIn: false, step: 1 };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  //UI config for sign in
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  //Load data from a remote endpoint
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
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
                  <Route exact path="/Expenses" component={Expenses} />
                  <Route exact path="/user" component={user} />
                  <Route exact path="/Home" component={Home} />
                </div>
              </div>
            </Router>
    
            {this.state.isSignedIn ? (
              <span>
                <div class="myDiv">
                  Signed in succssufully
                  <h3>Welcome {firebase.auth().currentUser.displayName}</h3>
                  <br></br>
                  <form>
                    <button
                      variant="btn btn-success"
                      className="btn1"
                      onClick={this.nextStep}
                    >
                      Next
                    </button>
                    <button
                      variant="btn btn-success"
                      className="btn2"
                      onClick={() => firebase.auth().signOut()}
                    >
                      Logout
                    </button>
                  </form>
                  {/* <img
                  alt="profile picture"
                  src={firebase.auth().currentUser.photoURL}
                /> */}
                </div>
              </span>
            ) : (
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
          </div>
        );
      case 2:
        return (
          <Router>
            <Header /> <br />
            <Expenses />
            {/* <div className="App">
              <Navbar />
              <div className="container">
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/Expenses" component={Expenses} />
                <Route exact path="/user" component={user} />
                <Route exact path="/Home" component={Home} />
              </div>
            </div> */}
          </Router>
        );
    }
  }
}

export default App;
