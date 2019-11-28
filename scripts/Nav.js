import * as React from 'react';
import { Logout } from './Logout';
import { Socket } from './Socket';
import { Link } from 'react-router-dom';

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_input : ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSearchInput = this.handleChangeSearchInput.bind(this);
  }
  
  handleSubmit(event){
      event.preventDefault();
    //   *** search_input is sent from client to server ***
      Socket.emit('new search', {
          'search_input': this.state.search_input
      });
      
      console.log('Search submitted to server!',this);
      console.log('Searched Item:', this.state.search_input);
  }
  handleChangeSearchInput(event) {
      this.setState({search_input: event.target.value});
      console.log('search_input:', event.target.value);
  }
      
  render() {
    return (
        <div>
            <nav id = "marketplace-navbar">
                <div className = "nav-container">
                    <div className = "big-bar">
                        <div className = "logo">
                            <a href="#"><span className = "J">J</span><span className = "A">A</span><span className = "R">R</span><span className = "S">S</span></a>
                        </div>
                        <form className = "search" onSubmit = {this.handleSubmit}>
                            <div>
                                <input type="text" name="search-input" className = "search-input" placeholder = "Search for a textbook..." value = {this.state.search_input} onChange = {this.handleChangeSearchInput} />
                            </div>
                            <div>
                                <button>Search</button>
                            </div>
                        </form>
                        <div className = "sell-logout">
                            <Link className = "sell-link" to="/sell-a-book">Sell a Book</Link>
                            {/*Google Logout button is here*/}
                            <div> <Logout/> </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            {/*
            <h3>Hello from Nav</h3>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/marketplace">
                    <li>Marketplace</li>
                </Link>
                <Link to="/submit">
                    <li>Submit</li>
                </Link>
            </ul>
            */}
        </div>
    );
  }
}
