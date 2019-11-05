import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { Login } from './Login';
import { Socket } from './Socket';
import { App } from './App';

//Calling the Login component to be rendered
ReactDOM.render(<App/>, document.getElementById('content'));

Socket.on('connect', function() {
    console.log('Connecting to the server!');
});
