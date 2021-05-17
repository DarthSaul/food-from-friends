import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { AlertProvider } from './contexts/AlertContext';
import { UserProvider } from './contexts/UserContext';
import { ProfileProvider } from './contexts/ProfileContext';

ReactDOM.render(
    <AlertProvider>
        <UserProvider>
            <ProfileProvider>
                <App />
            </ProfileProvider>
        </UserProvider>
    </AlertProvider>,
    document.getElementById('root')
);
