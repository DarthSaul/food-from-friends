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
        restaurants,
        likes,
        comments,
        user,
        user: { name, avatar }
    },
    showActions
}) => {
    const {
        userObj: { loading: userLoading, user: currentUser }
    } = useContext(UserContext);
    const { likeList, unlikeList, deleteList } = useContext(ListsContext);
    return (
        <div className='list bg-white p-1 my-1'>
            <div>
                <Link to={`/profile/${user._id}`} className='btn btn-primary'>
                    <img className='round-img' src={avatar.url} alt='' />
                    <h4>{name}</h4>
                </Link>
            </div>

            <div>
                <p className='lead my-1'>{city}</p>
                {showActions && (
                    <>
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
                            className='btn btn-light'
                            onClick={() => unlikeList(_id)}
                        >
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </button>

                        <Link to={`/lists/${_id}`} className='btn btn-primary'>
                            Discussion{' '}
                            {comments.length > 0 && (
                                <span className='comment-count'>
                                    {comments.length}
                                </span>
                            )}
                        </Link>

                        {!userLoading &&
                            currentUser &&
                            user._id === currentUser.data._id && (
                                <button
                                    type='button'
                                    className='btn btn-danger'
                                    onClick={() => deleteList(_id)}
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            )}
                    </>
                )}
            </div>
        </div>
    );
};

ListItem.propTypes = {
    list: PropTypes.object.isRequired
};

export default ListItem;
