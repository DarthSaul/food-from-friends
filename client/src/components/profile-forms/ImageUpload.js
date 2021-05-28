import React, { useState, useContext } from 'react';

import { ProfileContext } from '../../contexts/ProfileContext';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const { createProfile, uploadImage } = useContext(ProfileContext);
    const handleImageUpload = event => {
        setSelectedFile({ selectedFile: event.target.files[0] });
    };
    // if (selectedFile) {
    //     uploadImage(selectedFile);
    // }
    return (
        <form>
            <div className='my-2'>
                <label htmlFor='image'>Upload profile image</label>
                <input
                    type='file'
                    name='image'
                    id='image'
                    value={selectedFile}
                    onChange={handleImageUpload}
                />
            </div>
        </form>
    );
};

export default ImageUpload;
