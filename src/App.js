import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Home from "./Home.js";

firebase.initializeApp({
  apiKey: "AIzaSyCKD1Uydm10LcXglQPGFWYqDDEuy1hAnu8",
  authDomain: "reactlogin-c308d.firebaseapp.com",
});

class App extends Component {
  state = { isSignedIn: false, step: 1 };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

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

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    const { step } = this.state;
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <div className="App">
            {this.state.isSignedIn ? (
              <span>
                <div>
                  Signed in succssufully
                  <h3>
                    Welcome {firebase.auth().currentUser.displayName}
                  </h3>{" "}
                  <br></br>
                  <form>
                    <Button
                      variant="btn btn-success"
                      onClick={ this.nextStep}
                    >
                      {" "}
                      Next
                    </Button>
                    <Button
                      variant="btn btn-success"
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
          <Home/>
        )
    }
  }
}

export default App;
