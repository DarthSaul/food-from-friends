import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { UserContext } from '../../contexts/UserContext';
import { ProfileContext } from '../../contexts/ProfileContext';
import Spinner from '../layout/Spinner';

const Dashboard = () => {
    const {
        profileState: { profile, loading: profileLoading },
        getProfile
    } = useContext(ProfileContext);

    const {
        userObj: { user, loading: userLoading }
    } = useContext(UserContext);

    useEffect(() => {
        getProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const userData = !userLoading ? user.data : null;

    return (
        <>
            {profileLoading && profile === null ? (
                <Spinner />
            ) : (
                <>
                    <h1 className='large text-primary'>Dashboard</h1>
                    <p className='lead'>
                        <FontAwesomeIcon icon={faUser} /> Welcome{' '}
                        {userData && userData.name}
                    </p>
                    {profile !== null ? <>has profile</> : <>has no profile</>}
                </>
            )}
        </>
    );
};

export default Dashboard;
