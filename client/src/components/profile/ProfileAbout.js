import React from 'react';

const ProfileAbout = ({
    profile: { bio, favoriteCuisines, favoriteDishes }
}) => {
    return (
        <div className='profile-about bg-light p-2'>
            {bio && (
                <div className='p'>
                    <h2 className='text-primary'>Bio</h2>
                    <p className='fs-2 p-1 bio'>{bio}</p>
                    <div className='line'></div>
                </div>
            )}
            {favoriteCuisines.length > 0 && (
                <div className='p'>
                    <h2 className='text-primary'>Favorite cuisines</h2>
                    <div className='cuisines'>
                        {favoriteCuisines.map((el, ind) => (
                            <div className='fs-2 p-1' key={ind}>
                                {el}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileAbout;
