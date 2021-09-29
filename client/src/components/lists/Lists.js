import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotdog } from '@fortawesome/free-solid-svg-icons';

import { ListsContext } from '../../contexts/ListsContext';

import Spinner from '../layout/Spinner';
import ListItem from './ListItem';

const Lists = () => {
    const {
        getLists,
        listState: { lists, loading }
    } = useContext(ListsContext);

    useEffect(() => {
        getLists();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <h1 className='x-large text-primary my-1'>Lists</h1>
                    <p className='lead mb-2'>
                        <FontAwesomeIcon icon={faHotdog} /> Welcome to the
                        community
                    </p>
                    <Link to={'/lists/new'} className='btn btn-primary mb-2'>
                        <span className='fs-2'>Create a new list</span>
                    </Link>
                    <div className='lists'>
                        {lists.length > 0 ? (
                            lists.map(list => (
                                <ListItem
                                    key={list._id}
                                    list={list}
                                    showActions={true}
                                />
                            ))
                        ) : (
                            <h4>No lists found.</h4>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default Lists;
