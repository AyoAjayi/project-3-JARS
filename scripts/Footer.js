import * as React from 'react';
import { Link } from 'react-router-dom';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <footer id = "common-footer">
                <div className = "common-footer-links">
                    <div className = "footer-link">
                        <a href="#">About JARS</a>
                    </div>
                    <div className = "footer-link">
                        <a href="#">Announcements</a>
                    </div>
                    <div className = "footer-link">
                        <a href="#">Policies</a>
                    </div>
                </div>
                <div>
                    <p>JARS &copy; 2019, All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
  }
}
