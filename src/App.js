// importing used files and options
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Home from "./Home.js";
import Header from "./Components/Header/logo";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";

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
            <Header /> <br />
            <Router>
              <div className="App">
                <Navbar />
                <Route exact path="/" component={Landing} />
                <div className="container">
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/profile" component={Profile} />
                </div>
              </div>
            </Router>
            <br /> <h1>Or sign in using Google</h1>
            {this.state.isSignedIn ? (
              <span>
                <div class="myDiv">
                  Signed in succssufully
                  <h3>Welcome {firebase.auth().currentUser.displayName}</h3>
                  <br></br>
                  <form>
                    <Button
                      variant="btn btn-success"
                      className="btn1"
                      onClick={this.nextStep}
                    >
                      {" "}
                      Next
                    </Button>
                    <Button
                      variant="btn btn-success"
                      className="btn2"
                      onClick={() => firebase.auth().signOut()}
                    >
                      Logout
                    </Button>
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
          <React.Fragment>
            <Home />
          </React.Fragment>
        );
    }
  }
}

export default App;
