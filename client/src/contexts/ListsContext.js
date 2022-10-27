import React, { useState, useContext } from 'react';
import axios from 'axios';

import { AlertContext } from './AlertContext';

const ListsContext = React.createContext();

function ListsProvider({ children }) {
	const [listState, setLists] = useState({
		lists: [],
		list: null,
		loading: true,
		error: {},
	});

	const { setAlert } = useContext(AlertContext);

	function listsError(err) {
		setLists((prevState) => ({
			...prevState,
			error: {
				msg: err.response.statusText,
				status: err.response.status,
			},
			loading: false,
		}));
	}

	async function getLists() {
		try {
			const res = await axios.get('/api/lists');
			setLists((prevState) => ({
				...prevState,
				lists: res.data,
				list: null,
				loading: false,
			}));
		} catch (err) {
			const errors = err.response.data.errors;
			if (errors) {
				errors.forEach((error) => setAlert(error.msg, 'danger'));
			}
			listsError(err);
		}
	}

	async function getListById(id) {
		try {
			const res = await axios.get(`/api/lists/${id}`);
			setLists((prevState) => ({
				...prevState,
				list: res.data,
				loading: false,
			}));
		} catch (err) {
			const errors = err.response.data.errors;
			if (errors) {
				errors.forEach((error) => setAlert(error.msg, 'danger'));
			}
			listsError(err);
		}
	}

	async function createList(formData) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			await axios.post('/api/lists', formData, config);
			await getLists();
			setAlert('List created!', 'primary');
		} catch (err) {
			const errors = err.response.data.errors;
			if (errors) {
				errors.forEach((error) => setAlert(error.msg, 'danger'));
			}
			listsError(err);
		}
	}

	async function likeList(listId) {
		try {
			const res = await axios.put(`/api/lists/${listId}/like`);
			setLists((prevState) => ({
				...prevState,
				lists: prevState.lists.map((list) =>
					list._id === listId ? { ...list, likes: res.data } : list
				),
				loading: false,
			}));
		} catch (err) {
			const error = err.response.data;
			if (error) {
				setAlert(error.msg, 'danger');
			}
			listsError(err);
		}
	}
	async function unlikeList(listId) {
		try {
			const res = await axios.put(`/api/lists/${listId}/unlike`);
			setLists((prevState) => ({
				...prevState,
				lists: prevState.lists.map((list) =>
					list._id === listId ? { ...list, likes: res.data } : list
				),
				loading: false,
			}));
		} catch (err) {
			const error = err.response.data;
			if (error) {
				setAlert(error.msg, 'danger');
			}
			listsError(err);
		}
	}

	async function deleteList(listId) {
		try {
			await axios.delete(`/api/lists/${listId}`);
			setLists((prevState) => ({
				...prevState,
				lists: prevState.lists.filter((list) => list._id !== listId),
				loading: false,
			}));
			setAlert('List was removed', 'primary', 3000);
		} catch (err) {
			const error = err.response.data;
			if (error) {
				setAlert(error.msg, 'danger');
			}
			listsError(err);
		}
	}

	async function addComment(listId, comment) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			await axios.post(`/api/lists/${listId}/comment`, comment, config);
			await getListById(listId);
			setAlert('Comment added!', 'primary');
		} catch (err) {
			const error = err.response.data;
			if (error) {
				setAlert(error.msg, 'danger');
			}
			listsError(err);
		}
	}

	async function removeComment(listId, commentId) {
		try {
			await axios.delete(`/api/lists/${listId}/comment/${commentId}`);
			await getListById(listId);
			setAlert('Comment deleted.', 'success');
		} catch (err) {
			const error = err.response.data;
			if (error) {
				setAlert(error.msg, 'danger');
			}
			listsError(err);
		}
	}

	return (
		<ListsContext.Provider
			value={{
				listState,
				getLists,
				likeList,
				unlikeList,
				deleteList,
				createList,
				getListById,
				addComment,
				removeComment,
			}}
		>
			{children}
		</ListsContext.Provider>
	);
}

export { ListsProvider, ListsContext };
