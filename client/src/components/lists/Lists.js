import React, { useContext, useEffect } from 'react';

import { ListsContext } from '../../contexts/ListsContext';

import Spinner from '../layout/Spinner';

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
        <div>
            <h1>Lists</h1>
        </div>
    );
};

export default Lists;
