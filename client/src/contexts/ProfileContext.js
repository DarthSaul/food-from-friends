import React, { useState, useContext, useEffect } from 'react';
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

    const {
        userObj: { user }
    } = useContext(UserContext);

    useEffect(() => {
        if (user === null) {
            setProfileState(prevState => ({
                ...prevState,
                profile: null
            }));
        }
    }, [user]);

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

    async function createProfile(formData, history, edit = false) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            await axios.post('api/profile', formData, config);
            await getProfile();
            setAlert(edit ? 'Profile updated!' : 'Profile created!', 'success');
            if (!edit) {
                history.push('/dashboard');
            }
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => setAlert(error.msg, 'danger'));
            }
            setProfileState(prevState => ({
                ...prevState,
                error: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            }));
        }
    }

    return (
        <ProfileContext.Provider
            value={{ profileState, getProfile, createProfile }}
        >
            {children}
        </ProfileContext.Provider>
    );
}

export { ProfileProvider, ProfileContext };
