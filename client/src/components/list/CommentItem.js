import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { ListsContext } from '../../contexts/ListsContext';
import { UserContext } from '../../contexts/UserContext';

const CommentItem = ({
    listId,
    comment: { user, text, _id: commentId, date }
}) => {
    const { removeComment } = useContext(ListsContext);
    const {
        userObj: { loading: userLoading, user: currentUser }
    } = useContext(UserContext);
    return (
        <div className='list bg-white p-1 my-1'>
            <div>
                <Link to={`/profile/${user._id}`}>
                    <img
                        className='round-img'
                        src={user.avatar ? user.avatar.thumbnail : ''}
                        alt=''
                    />
                    <h4>{user.name}</h4>
                </Link>
            </div>
            <div>
                <p className='my-1'>{text}</p>
                <p className='list-date'>
                    Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
                </p>
                {!userLoading &&
                    currentUser &&
                    user._id === currentUser.data._id && (
                        <button
                            type='button'
                            className='btn btn-danger'
                            onClick={() => removeComment(listId, commentId)}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    )}
            </div>
        </div>
    );
};

CommentItem.propTypes = {
    listId: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired
};

export default CommentItem;
