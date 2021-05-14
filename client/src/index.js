import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { AlertProvider } from './AlertContext';
import { UserProvider } from './UserContext';

ReactDOM.render(
    <AlertProvider>
        <UserProvider>
            <App />
        </UserProvider>
    </AlertProvider>,
    document.getElementById('root')
);
