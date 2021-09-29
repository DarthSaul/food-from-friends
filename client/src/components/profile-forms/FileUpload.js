import React, { useState, useContext } from 'react';
import axios from 'axios';

import { UserContext } from '../../contexts/UserContext';

import Spinner from '../layout/Spinner';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose file');
    const [uploadedFile, setUploadedFile] = useState({
        fileName: null,
        imagePath: null,
        loading: false
    });

    const {
        userObj: { user, loading: userLoading },
        loadUser
    } = useContext(UserContext);

    const onChange = event => {
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
    };

    const onSubmit = async event => {
        event.preventDefault();
        setUploadedFile(prevState => ({
            ...prevState,
            loading: true
        }));
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { fileName, path } = res.data;
            setUploadedFile({
                imagePath: path,
                fileName,
                loading: false
            });
            loadUser();
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server');
            } else {
                console.log(err.response.data.msg);
            }
        }
    };

    const userData = !userLoading ? user.data : null;

    const { loading } = uploadedFile;

    return (
        <>
            <form className='form' onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type='file' id='customFile' onChange={onChange} />
                    <div className='mt'>
                        <label htmlFor='customFile'>Selected: {fileName}</label>
                    </div>
                </div>
                {file && (
                    <input
                        type='submit'
                        value={
                            userData.avatar && userData.avatar.filename
                                ? 'Replace'
                                : 'Upload'
                        }
                        className='btn btn-primary'
                    />
                )}
            </form>
            {userData === null || loading ? (
                <div>
                    <Spinner />
                </div>
            ) : (
                <div className='my-2'>
                    {userData.avatar || uploadedFile.imagePath ? (
                        <>
                            <h3 className='mt'>
                                {uploadedFile.imagePath
                                    ? 'Just uploaded'
                                    : 'Current'}
                            </h3>
                            <img
                                style={{ width: '350px', height: 'auto' }}
                                src={
                                    uploadedFile.imagePath
                                        ? uploadedFile.imagePath
                                        : userData.avatar.url
                                }
                                alt=''
                            />
                        </>
                    ) : (
                        <h3 className='my-2'>
                            User has not added a profile picture yet.
                        </h3>
                    )}
                </div>
            )}
        </>
    );
};

export default FileUpload;
