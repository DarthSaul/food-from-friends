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

    const { setAlert } = useContext(AlertContext);

    useEffect(() => {
        if (user === null) {
            setProfileState(prevState => ({
                ...prevState,
                profile: null
            }));
        }
    }, [user]);

    function clearProfile(err) {
        setProfileState(prevState => ({
            ...prevState,
            profile: null,
            error: {
                msg: err.response.statusText,
                status: err.response.status
            },
            loading: false
        }));
    }

    async function getCurrentProfile() {
        try {
            const res = await axios.get('/api/profile/me');
            setProfileState(prevState => ({
                ...prevState,
                profile: res.data,
                loading: false
            }));
        } catch (err) {
            clearProfile(err);
        }
    }

    async function getAllProfiles() {
        try {
            const res = await axios.get('/api/profile');
            setProfileState(prevState => ({
                ...prevState,
                profile: null,
                profiles: res.data,
                loading: false
            }));
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => setAlert(error.msg, 'danger'));
            }
            clearProfile(err);
        }
    }

    async function getProfileById(userId) {
        try {
            const res = await axios.get(`/api/profile/user/${userId}`);
            setProfileState(prevState => ({
                ...prevState,
                profile: res.data,
                loading: false
            }));
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => setAlert(error.msg, 'danger'));
            }
            clearProfile(err);
        }
    }

    async function createProfile(formData, history, edit = false) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            await axios.post('/api/profile', formData, config);
            await getCurrentProfile();
            setAlert(edit ? 'Profile updated!' : 'Profile created!', 'success');
            if (!edit) {
                history.push('/dashboard');
            }
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => setAlert(error.msg, 'danger'));
            }
            clearProfile(err);
        }
    }

    async function addRestaurant(formData, history) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            await axios.put('/api/profile/restaurants', formData, config);
            await getCurrentProfile();
            setAlert('Restaurant added to favorites!', 'success');
            history.push('/dashboard');
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => setAlert(error.msg, 'danger'));
            }
            clearProfile(err);
        }
    }

    async function deleteRestaurant(id) {
        try {
            await axios.delete(`/api/profile/restaurants/${id}`);
            await getCurrentProfile();
            setAlert('Restaurant removed from favorites.', 'danger');
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => setAlert(error.msg, 'danger'));
            }
            clearProfile(err);
        }
    }

    async function addMedia(formData, history) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            await axios.put('/api/profile/media', formData, config);
            await getCurrentProfile();
            setAlert('Media added to favorites!', 'success');
            history.push('/dashboard');
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => setAlert(error.msg, 'danger'));
            }
            clearProfile(err);
        }
    }

    async function deleteMedia(id) {
        try {
            await axios.delete(`/api/profile/media/${id}`);
            await getCurrentProfile();
            setAlert('Media removed from favorites.', 'danger');
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => setAlert(error.msg, 'danger'));
            }
            clearProfile(err);
        }
    }

    return (
        <ProfileContext.Provider
            value={{
                profileState,
                getCurrentProfile,
                getAllProfiles,
                getProfileById,
                createProfile,
                addRestaurant,
                deleteRestaurant,
                addMedia,
                deleteMedia
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
}

export { ProfileProvider, ProfileContext };
