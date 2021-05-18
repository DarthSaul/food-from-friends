import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import { ListsContext } from '../../contexts/ListsContext';

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
            {list === null || loading ? (
                <Spinner />
            ) : (
                <>
                    <h1>{list.city}</h1>
                </>
            )}
        </>
    );
};

export default List;
