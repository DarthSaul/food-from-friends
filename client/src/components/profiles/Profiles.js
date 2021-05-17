import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotdog } from '@fortawesome/free-solid-svg-icons';

import { ProfileContext } from '../../contexts/ProfileContext';

import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';

const Profiles = () => {
    const {
        getAllProfiles,
        profileState: { profiles, loading }
    } = useContext(ProfileContext);

    useEffect(() => {
        getAllProfiles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <h1 className='large text-primary'>Foodies</h1>
                    <p className='lead'>
                        <FontAwesomeIcon icon={faHotdog} /> Connect with other
                        food enthusiasts
                    </p>
                    <div className='profiles'>
                        {profiles.length > 0 ? (
                            profiles.map(el => (
                                <ProfileItem key={el._id} profile={el} />
                            ))
                        ) : (
                            <h4>No profiles found</h4>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default Profiles;
