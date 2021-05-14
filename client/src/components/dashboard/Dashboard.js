import React, { useContext, useEffect } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';

const Dashboard = () => {
    const { profileState, getProfile } = useContext(ProfileContext);
    useEffect(() => {
        getProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(profileState);
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;
