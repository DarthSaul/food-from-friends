import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import { ProfileContext } from '../../contexts/ProfileContext';

import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileRestaurant from './ProfileRestaurant';
import ProfileMedia from './ProfileMedia';

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
                        <div className='profile-res bg-white p-2'>
                            <h2 className='text-primary'>
                                Favorite Restaurants
                            </h2>
                            {profile.favoriteRestaurants.length > 0 ? (
                                <>
                                    {profile.favoriteRestaurants.map(el => (
                                        <ProfileRestaurant
                                            key={el._id}
                                            res={el}
                                        />
                                    ))}
                                </>
                            ) : (
                                <h4>
                                    {profile.user.name.trim().split(' ')[0]} has
                                    no favorite restaurants listed yet
                                </h4>
                            )}
                        </div>
                        <div className='profile-media bg-white p-2'>
                            <h2 className='text-primary'>Favorite Media</h2>
                            {profile.favoriteMedia.length > 0 ? (
                                <>
                                    {profile.favoriteMedia.map(el => (
                                        <ProfileMedia key={el._id} media={el} />
                                    ))}
                                </>
                            ) : (
                                <h4>
                                    {profile.user.name.trim().split(' ')[0]} has
                                    no favorite media listed yet
                                </h4>
                            )}
                        </div>
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
