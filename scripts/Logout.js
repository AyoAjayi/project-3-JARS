import * as React from 'react';
import { GoogleLogout } from 'react-google-login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

/*global gapi*/
/*global logout*/

// Created a login class to display the Google Login button when page is rendered
export class Logout extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loggedOut : false
    }
    
    this.setLoggedOut = () => {
      this.setState({loggedOut: true})
    }
  }
  render() {
    const logout = (response) => {
      this.setState({loggedOut: true});
      console.log("User just got logged out: ", this.state.loggedOut);
    }
    
    if (this.state.loggedOut === true){
      console.log("Inside the function");
      return <Redirect to='/' />;
    }
    else {
      console.log("Not logged out!")
    }
    
    return (
      // Added a class for the login component to center it to the middle of the webpage. Css for wrapper class is in style.css file
      <div className = "logout-wrapper">
          <GoogleLogout
            clientId="433826711359-r31ipjdt01vfjhgbdi1go9b1508c7t8g.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
            theme = 'dark'
          >
          </GoogleLogout>
      </div>
    );
  }
}
