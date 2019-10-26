import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Login } from './Login';
import { Socket } from './Socket';

//Calling the Login component to be rendered
ReactDOM.render(<Login/>, document.getElementById('content'));

Socket.on('connect', function() {
    console.log('Connecting to the server!');
});
