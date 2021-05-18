import React, { useState, useContext } from 'react';
import axios from 'axios';

import { AlertContext } from './AlertContext';

const ListsContext = React.createContext();

function ListsProvider({ children }) {
    const [listState, setLists] = useState({
        lists: [],
        list: null,
        loading: true,
        error: {}
    });

    const { setAlert } = useContext(AlertContext);

    function listsError(err) {
        setLists(prevState => ({
            ...prevState,
            error: {
                msg: err.response.statusText,
                status: err.response.status
            },
            loading: false
        }));
    }

    async function getLists() {
        try {
            const res = await axios.get('api/lists');
            setLists(prevState => ({
                ...prevState,
                lists: res.data,
                loading: false
            }));
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach(error => setAlert(error.msg, 'danger'));
            }
            listsError(err);
        }
    }

    return (
        <ListsContext.Provider value={{ listState, getLists }}>
            {children}
        </ListsContext.Provider>
    );
}

export { ListsProvider, ListsContext };
