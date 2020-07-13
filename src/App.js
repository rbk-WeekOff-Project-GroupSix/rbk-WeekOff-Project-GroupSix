import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Home from "./Home.js"

firebase.initializeApp({
  apiKey: "AIzaSyCKD1Uydm10LcXglQPGFWYqDDEuy1hAnu8",
  authDomain: "reactlogin-c308d.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
     
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed in succssufully </div>
            <button onClick={() => firebase.auth().signOut()}> Next</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1> <br></br>
            <button onClick={() => firebase.auth().signOut()}>sign out</button>
            {/* <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            /> */}
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default App

