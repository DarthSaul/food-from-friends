import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose file');
    const [uploadedFile, setUploadedFile] = useState({});

    const onChange = event => {
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
    };

    const onSubmit = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('myFile', file);
        try {
            const res = await axios.post('upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath });
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server');
            } else {
                console.log(err.response.data.msg);
            }
        }
    };

    return (
        <>
            <form className='form' onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type='file' id='customFile' onChange={onChange} />
                    <label htmlFor='customFile'>{fileName}</label>
                </div>
                <input
                    type='submit'
                    value='Upload'
                    className='btn btn-primary my-1'
                />
            </form>
            {uploadedFile ? (
                <div>
                    <div>
                        <h3>{uploadedFile.fileName}</h3>
                        <img
                            style={{ width: '100%' }}
                            src={uploadedFile.filePath}
                            alt=''
                        />
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default FileUpload;
