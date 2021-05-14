import React, { useState, useContext } from 'react';
import axios from 'axios';

import { UserContext } from './UserContext';
import { AlertContext } from './AlertContext';

const ProfileContext = React.createContext();

function ProfileProvider({ children }) {
    const [profileState, setProfileState] = useState({
        profile: null,
        profiles: [],
        loading: true,
        error: {}
    });

    const { userObj } = useContext(UserContext);
    const { setAlert } = useContext(AlertContext);

    async function getProfile() {
        try {
            const res = await axios.get('/api/profile/me');
            setProfileState(prevState => ({
                ...prevState,
                profile: res.data,
                loading: false
            }));
        } catch (err) {
            setProfileState(prevState => ({
                ...prevState,
                error: {
                    msg: err.response.statusText,
                    status: err.response.status
                },
                loading: false
            }));
        }
    }

    return (
        <ProfileContext.Provider value={{ profileState, getProfile }}>
            {children}
        </ProfileContext.Provider>
    );
}

export { ProfileProvider, ProfileContext };
