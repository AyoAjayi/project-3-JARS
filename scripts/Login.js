import * as React from 'react';
import GoogleLogin from 'react-google-login';
/*global gapi*/

// Created a login class to display the Google Login button when page is rendered.
export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const responseGoogle = (response) => {
        let auth = gapi.auth2.getAuthInstance();
        let user = auth.currentUser.get();
        if (user.isSignedIn()) {
            console.log("google token" + user.getAuthResponse().id_token);
        }
        console.log(response);
    };
    return (
      <div>
        <GoogleLogin
            clientId = '412518169761-vo15jqtbrgcbg30d9t690qc3odu17gk0.apps.googleusercontent.com'
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}




