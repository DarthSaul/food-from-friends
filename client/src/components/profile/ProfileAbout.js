import React from 'react';

const ProfileAbout = ({
    profile: { bio, favoriteCuisines, favoriteDishes }
}) => {
    return (
        <div className='profile-about bg-light p-2'>
            {bio && (
                <>
                    <h2 className='text-primary'>Bio</h2>
                    <p>{bio}</p>
                    <div className='line'></div>
                </>
            )}
            {favoriteCuisines.length > 0 && (
                <>
                    <h2 className='text-primary'>Favorite cuisines</h2>
                    <div className='skills'>
                        {favoriteCuisines.map((el, ind) => (
                            <div className='p-1' key={ind}>
                                {el}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProfileAbout;
