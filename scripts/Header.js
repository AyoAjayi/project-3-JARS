import * as React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <nav id = "marketplace-navbar">
                <div class = "nav-container">
                    <div class = "tiny-links">
                        <div class = "helper-links">
                            <div class = "help">
                                <a href="#">Help and Contact</a>
                            </div>
                            <div class = "terms">
                                <a href="#">Terms and Conditions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
}
