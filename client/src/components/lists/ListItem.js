import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faThumbsDown,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

import { UserContext } from '../../contexts/UserContext';
import { ListsContext } from '../../contexts/ListsContext';

const ListItem = ({
    list: {
        _id,
        city,
        likes,
        comments,
        user: { name, avatar, _id: user_id }
    },
    showActions
}) => {
    const {
        userObj: { loading: userLoading, user: currentUser }
    } = useContext(UserContext);
    const { likeList, unlikeList, deleteList } = useContext(ListsContext);
    return (
        <div className='list bg-success p-1 my-1'>
            <img src={avatar.url} alt='' />
            <div className='list-inner'>
                <p className='lead text-black'>{city}</p>
                <h4>
                    A list by{' '}
                    <Link
                        to={`/profile/${user_id}`}
                        className='list-profile-link'
                    >
                        {name}
                    </Link>
                </h4>
                {showActions && (
                    <div className='list-actions'>
                        <Link to={`/lists/${_id}`} className='btn btn-primary'>
                            View List
                        </Link>
                        <button
                            type='button'
                            className='btn btn-light'
                            onClick={() => likeList(_id)}
                        >
                            <FontAwesomeIcon icon={faThumbsUp} />{' '}
                            {likes.length > 0 && <span>{likes.length}</span>}
                        </button>

                        <button
                            type='button'
                            className='btn btn-danger'
                            onClick={() => unlikeList(_id)}
                        >
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </button>

                        <Link to={`/lists/${_id}`} className='btn btn-dark'>
                            Discussion{' '}
                            {comments.length > 0 && (
                                <span className='comment-count'>
                                    {comments.length}
                                </span>
                            )}
                        </Link>

                        {!userLoading &&
                            currentUser &&
                            user_id === currentUser.data._id && (
                                <button
                                    type='button'
                                    className='btn btn-danger'
                                    onClick={() => deleteList(_id)}
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            )}
                    </div>
                )}
            </div>
        </div>
    );
};

ListItem.propTypes = {
    list: PropTypes.object.isRequired
};

export default ListItem;
