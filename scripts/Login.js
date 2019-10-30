import * as React from 'react';
import GoogleLogin from 'react-google-login';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { Redirect } from 'react-router-dom';


/*global gapi*/

// Created a login class to display the Google Login button when page is rendered
export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const responseGoogle = (response) => {
        let auth = gapi.auth2.getAuthInstance();
        let user = auth.currentUser.get();
        //Does not work but was supposed to redirect to another page after user signed in.
        // if (user.isSignedIn()) {
        //   return <Redirect to="./static/marketplace.html"/>;
        // }
        if (user.isSignedIn()) {
            console.log("google token" + user.getAuthResponse().id_token);
        }
        console.log(response);
    };
    return (
      // Added a class for the login component to center it to the middle of the webpage. Css for wrapper class is in style.css file
      <div className ="wrapper">
        <GoogleLogin
            clientId = '641650714654-3nvhsfpcnhgiljvfrhj70f7idk3uv0gi.apps.googleusercontent.com'
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            theme='dark'
            cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}
