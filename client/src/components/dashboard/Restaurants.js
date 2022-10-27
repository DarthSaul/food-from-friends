import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { ProfileContext } from '../../contexts/ProfileContext';
import AddRestaurant from '../profile-forms/AddRestaurant';

const Restaurants = ({ restaurants }) => {
	const [viewState, setView] = useState({ view: 'list' });

	const changeView = () => {
		const newView = view === 'list' ? 'new' : 'list';
		setView({ view: newView });
	};

	const { view } = viewState;

	const { deleteRestaurant } = useContext(ProfileContext);

	const deleteOnClick = async (event, id) => {
		event.preventDefault();
		deleteRestaurant(id);
	};

	const restaurantList = restaurants.map((rest) => (
		<tr key={rest._id}>
			<td>{rest.name}</td>
			<td className="hide-sm">{rest.location}</td>
			<td className="hide-sm">{rest.rating}</td>
			<td className="hide-sm">{rest.review}</td>
			<td>
				<button
					className="btn btn-danger"
					onClick={(e) => deleteOnClick(e, rest._id)}
				>
					Delete
				</button>
			</td>
		</tr>
	));

	return (
		<>
			<div className="favs-header my-2">
				<h2>Favorite Restaurants</h2>
				<div className="btn btn-primary" onClick={changeView}>
					<FontAwesomeIcon icon={faPizzaSlice} className="mr-1" />
					{view === 'list' ? 'Add new' : 'Back to list'}
				</div>
			</div>

			{view === 'list' && (
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th className="hide-sm">Location</th>
							<th className="hide-sm">Rating</th>
							<th className="hide-sm">Review</th>
							<th className="hide-sm">Actions</th>
						</tr>
					</thead>
					<tbody>{restaurantList}</tbody>
				</table>
			)}
			{view === 'new' && <AddRestaurant changeView={changeView} />}
		</>
	);
};

Restaurants.propTypes = {
	restaurants: PropTypes.array.isRequired,
};

export default Restaurants;
