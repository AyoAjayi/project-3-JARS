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
  
  componentDidMount(){
    Socket.on('username_received', (data_one) => {
            this.setState({
                'username': data_one['user_name'],
            });
        });
  }
  
  componentDidMount(){
    Socket.on('email_received', (data_two) => {
            this.setState({
                'email': data_two['user_email'],
            });
        });
  }
  componentDidMount(){
    Socket.on('image_received', (data) => {
            this.setState({
                'image': data['imageUrl'],
            });
        });
  }
  
  render() {
    console.log(this.state.username);
    console.log(this.state.email);
    console.log(this.state.image);
    
    const responseGoogle = (response) => {
        let auth = gapi.auth2.getAuthInstance();
        let user = auth.currentUser.get();
        
        // On success, will redirect to marketplace component
        if (user.isSignedIn()) {
            console.log("Google Token:  " + user.getAuthResponse().id_token);
            console.log(response);
        this.setState({user_credentials: response});
        Socket.emit('login', 
            {'data': this.state.user_credentials
        },
        );
            // if (this.state.loggedIn === true) {
            //   console.log('Inside the function');
            //   return <Redirect to='/marketplace' />;
            // }
        }
       
    };

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










// import * as React from 'react';
// import GoogleLogin from 'react-google-login';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { Marketplace } from './Marketplace';
// import { Socket } from './Socket';
// import ReactDOM from 'react-dom';

// /*global gapi*/


// // Created a login class to display the Google Login button when page is rendered


// export class Login extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       loggedIn : false
//     };
//   }
  

//   render() {
//     const responseGoogle = (response) => {
//         let auth = gapi.auth2.getAuthInstance();
//         let user = auth.currentUser.get();
        
//         // On success, will redirect to marketplace component
//         if (user.isSignedIn()) {
//             console.log("Google Token:  " + user.getAuthResponse().id_token);
//             console.log(response);
//             this.setState({
//               isLoggedIn: true
//             });
//       const renderRedirect = () => {
//         if (this.state.isLoggedIn) {
//           return <Redirect to='/marketplace' />;
//       }
//       }
//     }
//     return (
//       // Added a class for the login component to center it to the middle of the webpage. Css for wrapper class is in style.css file
//       <div className = "wrapper">
//         <GoogleLogin
//           clientId = '433826711359-r31ipjdt01vfjhgbdi1go9b1508c7t8g.apps.googleusercontent.com'
//           usernameonText="Sign in with Google"
//           onSuccess={responseGoogle}
//           onFailure={responseGoogle}
//           theme='dark'
//           cookiePolicy={'single_host_origin'}
//         />
//       </div>
//     );
//   };
// }
// }


// import * as React from 'react';
// import GoogleLogin from 'react-google-login';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { Marketplace } from './Marketplace';
// import { Socket } from './Socket';
// import ReactDOM from 'react-dom';

// /*global gapi*/


// // Created a login class to display the Google Login button when page is rendered


// export class Login extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       loggedIn : false
//     };
    
//     // this.setLoggedIn = () => {
//     //   this.setState({loggedIn: true});
//     // };
//   }
  
//   // componentDidMount(){
//   //   Socket.on('username_received', (data_one) => {
//   //           this.setState({
//   //               'username': data_one['user_name'],
//   //           });
//   //       });
//   // }
  
//   // componentDidMount(){
//   //   Socket.on('email_received', (data_two) => {
//   //           this.setState({
//   //               'email': data_two['user_email'],
//   //           });
//   //       });
//   // }
//   // componentDidMount(){
//   //   Socket.on('image_received', (data) => {
//   //           this.setState({
//   //               'image': data['imageUrl'],
//   //           });
//   //       });
//   // }
  
//   render() {
//     const responseGoogle = (response) => {
//         let auth = gapi.auth2.getAuthInstance();
//         let user = auth.currentUser.get();
        
//         // On success, will redirect to marketplace component
//         if (user.isSignedIn()) {
//             console.log("Google Token:  " + user.getAuthResponse().id_token);
//             console.log(response);
//             this.setState({
//               isLoggedIn: true
//             });
        

//         // if (this.state.isLoggedIn){
//         //   console.log(true);
//         //   return 'AYO';
//         //   // return <Redirect to='/marketplace' />;
//         // }
            
//         this.setState({user_credentials: response});
//         Socket.emit('login', 
//             {'data': this.state.user_credentials
//         },);
//             // if (this.state.loggedIn === true) {
//             //   console.log('Inside the function');
//             //   return <Redirect to='/marketplace' />;
//             // }
//         }
//       const renderRedirect = () => {
//       if (this.state.isLoggedIn) {
//           return <Redirect to='/marketplace' />;
//     }
//     };

//     return (
//       // Added a class for the login component to center it to the middle of the webpage. Css for wrapper class is in style.css file
//       <div className = "wrapper">
//         {renderRedirect}
//         <GoogleLogin
//           clientId = '433826711359-r31ipjdt01vfjhgbdi1go9b1508c7t8g.apps.googleusercontent.com'
//           usernameonText="Sign in with Google"
//           onSuccess={responseGoogle}
//           onFailure={responseGoogle}
//           theme='dark'
//           cookiePolicy={'single_host_origin'}
//         />
//       </div>
//     );
//   };
// }
// }
