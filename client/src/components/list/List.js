import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Spinner from '../layout/Spinner';
import { ListsContext } from '../../contexts/ListsContext';

import CommentForm from './CommentForm';

const List = () => {
    const {
        getListById,
        removeComment,
        listState: { list, loading }
    } = useContext(ListsContext);

    const { id } = useParams();

    useEffect(() => {
        getListById(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Link to='/lists' className='btn'>
                Back to all lists
            </Link>
            {list === null || loading ? (
                <Spinner />
            ) : (
                <>
                    <div>
                        <h1>{list.city}</h1>
                        <ul>
                            {list.restaurants.map(el => (
                                <li key={el._id}>
                                    <h4>{el.name}</h4>
                                    <h4>{el.rating}</h4>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <CommentForm listId={id} />
                    <ul>
                        {list.comments.map(el => (
                            <li key={el._id}>
                                <h4>{el.user.name}</h4>
                                <h4>{el.text}</h4>
                                <button
                                    type='button'
                                    className='btn btn-danger'
                                    onClick={() => removeComment(id, el._id)}
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};

export default List;
