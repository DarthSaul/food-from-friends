import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import { ProfileContext } from '../../contexts/ProfileContext';

import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';

const Profile = () => {
    const {
        getProfileById,
        profileState: { profile, loading }
    } = useContext(ProfileContext);

    const { id } = useParams();

    useEffect(() => {
        getProfileById(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {profile === null || loading ? (
                <Spinner />
            ) : (
                <>
                    <div className='profile-grid my-1'>
                        <ProfileTop profile={profile} />
                        <ProfileAbout profile={profile} />
                    </div>
                    <Link className='btn btn-light my-1' to='/profiles'>
                        Back to all Profiles
                    </Link>
                </>
            )}
        </>
    );
};

export default Profile;
