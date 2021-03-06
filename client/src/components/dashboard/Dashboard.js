import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faUserMinus,
    faUserCircle
} from '@fortawesome/free-solid-svg-icons';

import { UserContext } from '../../contexts/UserContext';
import { ProfileContext } from '../../contexts/ProfileContext';

import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Restaurants from './Restaurants';
import Media from './Media';

const Dashboard = () => {
    const {
        profileState: { profile, loading: profileLoading },
        getCurrentProfile
    } = useContext(ProfileContext);

    const {
        userObj: { user, loading: userLoading },
        deleteAccount
    } = useContext(UserContext);

    useEffect(() => {
        getCurrentProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const clickToDelete = async event => {
        deleteAccount();
    };

    const userData = !userLoading ? user.data : null;

    return (
        <>
            {profileLoading && profile === null ? (
                <Spinner />
            ) : (
                <>
                    <h1 className='large text-primary'>Dashboard</h1>
                    <div className='lead'>
                        <FontAwesomeIcon icon={faUser} /> Welcome{' '}
                        {userData && userData.name}
                        {userData && (
                            <div>
                                {userData.avatar && (
                                    <img
                                        className='my-1 dash-img'
                                        style={{
                                            width: 'auto',
                                            height: '250px'
                                        }}
                                        src={userData.avatar.url}
                                        alt=''
                                    />
                                )}

                                <div>
                                    <Link
                                        to='/upload'
                                        className='btn btn-success'
                                    >
                                        <FontAwesomeIcon
                                            icon={faUserCircle}
                                            style={{ marginRight: 2 }}
                                        />{' '}
                                        Upload or Change Profile Image
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    {!profileLoading && profile !== null ? (
                        <>
                            <DashboardActions />
                            <Restaurants
                                restaurants={profile.favoriteRestaurants}
                            />
                            <Media media={profile.favoriteMedia} />
                            <div className='my-2'>
                                <button
                                    className='btn btn-danger'
                                    onClick={clickToDelete}
                                >
                                    <FontAwesomeIcon icon={faUserMinus} />{' '}
                                    Delete My Account
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p>
                                You have not yet created a profile. You can
                                create your profile at the link below:
                            </p>
                            <Link
                                to='/create-profile'
                                className='btn btn-primary my-1'
                            >
                                Create Profile
                            </Link>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Dashboard;
