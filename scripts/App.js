import * as React from 'react';
import { Marketplace } from './Marketplace';
import { Submit } from './Submit';
import { Nav } from './Nav';
import { Login } from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <Login/>
          <h3>Hello from App</h3>
          <Nav/>
          <Switch>
            <Route path="/marketplace" component={ Marketplace } />
            <Route path="/submit" component={ Submit } />
          </Switch>
        </div>
      </Router>
    );
  }
}
