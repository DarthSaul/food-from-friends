import React, { useContext, useEffect, useState } from 'react';
import { ListsContext } from '../../contexts/ListsContext';
import Spinner from '../layout/Spinner';
import ListItem from './ListItem';
import ListForm from '../list-form/ListForm';
import '../../css/Lists.css';

const Lists = () => {
	const [tab, setTab] = useState('lists');
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
							<div
								onClick={(e) =>
									setTab(tab === 'lists' ? 'new' : 'lists')
								}
								className="btn btn-dark"
							>
								<span className="fs-1">
									{tab === 'lists'
										? ' Create a new list'
										: 'Go Back'}
								</span>
							</div>
						</div>
					</div>

					<hr className="mb-2" />
					{tab === 'lists' && (
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
					)}
					{tab === 'new' && <ListForm />}
				</>
			)}
		</>
	);
};

export default Lists;
