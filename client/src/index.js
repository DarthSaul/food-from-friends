import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { AlertProvider } from './contexts/AlertContext';
import { UserProvider } from './contexts/UserContext';
import { ProfileProvider } from './contexts/ProfileContext';
import { ListsProvider } from './contexts/ListsContext';

ReactDOM.render(
    <AlertProvider>
        <UserProvider>
            <ProfileProvider>
                <ListsProvider>
                    <App />
                </ListsProvider>
            </ProfileProvider>
        </UserProvider>
    </AlertProvider>,
    document.getElementById('root')
);
