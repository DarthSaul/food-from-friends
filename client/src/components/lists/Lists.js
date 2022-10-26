import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListsContext } from '../../contexts/ListsContext';
import Spinner from '../layout/Spinner';
import ListItem from './ListItem';
import '../../css/Lists.css';

const Lists = () => {
	const {
		getLists,
		listState: { lists, loading },
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
					<div className="lists-header mb-2">
						<div>
							<h1 className="large text-primary">Lists</h1>
							<p className="fw-light fs-1">
								View curated lists from the community.
							</p>
						</div>
						<div>
							<Link to={'/lists/new'} className="btn btn-dark">
								<span className="fs-1">Create a new list</span>
							</Link>
						</div>
					</div>

					<hr className="mb-2" />

					<div className="lists">
						{lists.length > 0 ? (
							lists.map((list) => (
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
