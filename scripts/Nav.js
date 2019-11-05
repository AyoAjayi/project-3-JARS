import * as React from 'react';
import { Link } from 'react-router-dom';

export class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <h3>Hello from Nav</h3>
            <ul>
                <Link to="/marketplace">
                    <li>Marketplace</li>
                </Link>
                <Link to="/submit">
                    <li>Submit</li>
                </Link>
            </ul>
        </div>
    );
  }
}
