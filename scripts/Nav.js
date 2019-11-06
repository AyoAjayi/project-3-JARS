import * as React from 'react';
import { Logout } from './Logout';
import { Link } from 'react-router-dom';

export class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <nav id = "marketplace-navbar">
                <div class = "nav-container">
                    <div class = "big-bar">
                        <div class = "logo">
                            <a href="#"><span class = "J">J</span><span class = "A">A</span><span class = "R">R</span><span class = "S">S</span></a>
                        </div>
                        <div class = "search">
                            <div>
                                <input type="text" name="search-input" class = "search-input" placeholder = "Search for a textbook..."/>
                            </div>
                            <div>
                                <button>Search</button>
                            </div>
                        </div>
                        <div class = "sell-logout">
                            <Link to="/sell-a-book">Sell a Book</Link>
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
