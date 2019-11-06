import * as React from 'react';
import { Home } from './Home';
import { Marketplace } from './Marketplace';
import { Submit } from './Submit';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

{/* This is the main component which is being rendered by Main.js */}
export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/*Using react router to navigate between different components*/}
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/marketplace" component={ Marketplace } />
            <Route path="/sell-a-book" component={ Submit } />
          </Switch>
        </div>
      </Router>
    );
  }
}
