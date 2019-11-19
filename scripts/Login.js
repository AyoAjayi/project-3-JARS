import * as React from 'react';
import GoogleLogin from 'react-google-login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Marketplace } from './Marketplace';
import { Socket } from './Socket';

/*global gapi*/

// Created a login class to display the Google Login button when page is rendered
export class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loggedIn : false
    };
    
    this.setLoggedIn = () => {
      this.setState({loggedIn: true});
    };
  }
  
  // componentDidMount(){
  //   Socket.on('username_received', (data_one) => {
  //           this.setState({
  //               'username': data_one['user_name'],
  //           });
  //       });
  // }
  
  // componentDidMount(){
  //   Socket.on('email_received', (data_two) => {
  //           this.setState({
  //               'email': data_two['user_email'],
  //           });
  //       });
  // }

  // componentDidMount(){
  //   Socket.on('image_received', (data) => {
  //           this.setState({
  //               'image': data['imageUrl'],
  //           });
  //       });
  // }
  
  render() {
    // console.log(this.state.username);
    // console.log(this.state.email);
    // console.log(this.state.image);
    
    const responseGoogle = (response) => {
        let auth = gapi.auth2.getAuthInstance();
        let user = auth.currentUser.get();
        
        if (user.isSignedIn()) {
            console.log("Google Token:  " + user.getAuthResponse().id_token);
            console.log(response);
            // This will set 'loggedIn' to true
            this.setState({loggedIn: true});
            Socket.emit('google token', {
                'google_user_token': user.getAuthResponse().id_token
            });
        }
    };
    
    
    // On success, will redirect to marketplace component
    if (this.state.loggedIn === true){
      console.log("Inside the function");
      return <Redirect to='/marketplace' />;
    }
    else {
      console.log("Not logged in!")
    }

    return (
      // Added a class for the login component to center it to the middle of the webpage. Css for wrapper class is in style.css file
      <div className = "wrapper">
        <GoogleLogin
          clientId = '433826711359-r31ipjdt01vfjhgbdi1go9b1508c7t8g.apps.googleusercontent.com'
          usernameonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          theme='dark'
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}