import React, { useState, useContext } from 'react';
import axios from 'axios';

import { UserContext } from '../../contexts/UserContext';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose file');
    const [uploadedFile, setUploadedFile] = useState({
        fileName: null,
        imagePath: null,
        loading: true
    });

    const {
        userObj: { user, loading: userLoading }
    } = useContext(UserContext);

    const onChange = event => {
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
    };

    const onSubmit = async event => {
        event.preventDefault();
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
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server');
            } else {
                console.log(err.response.data.msg);
            }
        }
    };

    const userData = !userLoading ? user.data : null;

    return (
        <>
            <form className='form' onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type='file' id='customFile' onChange={onChange} />
                    <label htmlFor='customFile'>Selected: {fileName}</label>
                </div>
                <input
                    type='submit'
                    value='Upload'
                    className='btn btn-primary my-1'
                />
            </form>
            {userData && (
                <div>
                    <h3>Current</h3>
                    <img
                        style={{ width: '350px', height: 'auto' }}
                        src={userData.avatar.url}
                        alt=''
                    />
                </div>
            )}
            {!uploadedFile.loading && (
                <div>
                    <div>
                        <h3>Just uploaded</h3>
                        <img
                            style={{ width: '350px', height: 'auto' }}
                            src={uploadedFile.imagePath}
                            alt=''
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default FileUpload;
