import * as React from 'react';
import GoogleLogin from 'react-google-login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Marketplace } from './Marketplace';
import { Header } from './Header';
import { Login } from './Login';
import { Footer } from './Footer';



/*global gapi*/

// Created a login class to display the Google Login button when page is rendered
export class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loggedIn : false
    };
    
    this.ClickedLogIn = () => {
      this.setState({loggedIn: true});
    };
  }
  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to='/marketplace' />;
    }
    return (
      // Added a class for the login component to center it to the middle of the webpage. Css for wrapper class is in style.css file
      <div className = "home-content">
        {/*Header component is here*/}
        <Header/>
      
        <nav id = "main-navbar">
          <div className = "logo">
              <a href="#"><span className = "J">J</span><span className = "A">A</span><span className = "R">R</span><span className= "S">S</span></a>
          </div>
        </nav>
        
        <section className = "content">
          <div className = "welcome-text">
              <h1 className = "hello">Hello</h1>
              <p className = "welcome">Welcome to JARS</p>
              <p className = "sign-in">Sign in with Google to continue...</p>
          </div>
        </section>
        
        <Login/>
        
        <div className = "login-button">
          <button onClick = {this.ClickedLogIn} >Begin Shopping</button>
        </div>
        
        {/*Footer component is here*/}
        <Footer/>
      </div>
    );
  }
}
