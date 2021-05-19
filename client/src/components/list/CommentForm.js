import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { ListsContext } from '../../contexts/ListsContext';

const CommentForm = ({ listId }) => {
    const [comment, setComment] = useState({
        text: ''
    });

    const { addComment } = useContext(ListsContext);

    const handleChange = event => {
        const { name, value } = event.target;
        setComment({
            [name]: value
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        await addComment(listId, comment);
        setComment({ text: '' });
    };

    return (
        <form className='form my-2' onSubmit={handleSubmit}>
            <div className='form-group'>
                <textarea
                    name='text'
                    cols='30'
                    rows='4'
                    placeholder='Enter your comment here'
                    value={comment.text}
                    onChange={handleChange}
                />
            </div>
            <input type='submit' className='btn btn-primary' />
        </form>
    );
};

CommentForm.propTypes = {
    id: PropTypes.string
};

export default CommentForm;
