import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import { ListsContext } from '../../contexts/ListsContext';

import ListDetail from './ListDetail';
import Restaurants from './Restaurants';
import Comments from './Comments';

const List = () => {
	const {
		getListById,
		listState: { list, loading },
	} = useContext(ListsContext);

	const { id } = useParams();

	useEffect(() => {
		getListById(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<div className="lists-header mb-2">
				<div>
					<h1 className="large text-primary">Lists</h1>
					<p className="fw-light fs-1">
						View curated lists from the community.
					</p>
				</div>
				<div>
					<Link to="/lists" className="btn btn-dark">
						<span className="fs-1">Back</span>
					</Link>
				</div>
			</div>
			<hr className="mb-2" />
			{list === null || loading ? (
				<Spinner />
			) : (
				<>
					<div className="mb-2">
						<ListDetail list={list} showActions={false} />
					</div>

					{/* Wrap here */}
					{list.restaurants.length > 0 && (
						<Restaurants
							list={list.restaurants}
							user={list.user.name}
						/>
					)}
					<hr className="my-2" />
					<Comments id={id} comments={list.comments} />
				</>
			)}
		</div>
	);
};

export default List;
