import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import { ListsContext } from '../../contexts/ListsContext';

import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import ListItem from '../lists/ListItem';
import ListRestaurant from './ListRestaurant';

const List = () => {
    const {
        getListById,
        listState: { list, loading }
    } = useContext(ListsContext);

    const { id } = useParams();

    useEffect(() => {
        getListById(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Link to='/lists' className='btn my-2'>
                <span className='fs-2'>Back to all lists</span>
            </Link>
            {list === null || loading ? (
                <Spinner />
            ) : (
                <>
                    <ListItem list={list} showActions={false} />
                    {list.restaurants.length > 0 &&
                        list.restaurants.map(res => (
                            <ListRestaurant restaurant={res} key={res._id} />
                        ))}
                    <CommentForm listId={id} />
                    <div className='comments'>
                        {list.comments.map(comment => (
                            <CommentItem
                                key={comment._id}
                                listId={id}
                                comment={comment}
                            />
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default List;
