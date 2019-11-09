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
                <div className = "nav-container">
                    <div className = "tiny-links">
                        <div className = "helper-links">
                            <div className = "help">
                                <a href="#">Help and Contact</a>
                            </div>
                            <div className = "terms">
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
