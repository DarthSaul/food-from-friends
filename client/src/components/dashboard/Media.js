import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ProfileContext } from '../../contexts/ProfileContext';
import AddMedia from '../profile-forms/AddMedia';

const Media = ({ media }) => {
	const [viewState, setView] = useState({ view: 'list' });

	const changeView = () => {
		const newView = view === 'list' ? 'new' : 'list';
		setView({ view: newView });
	};

	const { view } = viewState;

	const { deleteMedia } = useContext(ProfileContext);

	const deleteOnClick = async (event, id) => {
		event.preventDefault();
		deleteMedia(id);
	};

	const mediaList = media.map((el) => (
		<tr key={el._id}>
			<td>{el.title}</td>
			<td className="hide-sm">{el.type}</td>
			<td className="hide-sm">{el.description}</td>
			<td>
				<button
					className="btn btn-danger"
					onClick={(e) => deleteOnClick(e, el._id)}
				>
					Delete
				</button>
			</td>
		</tr>
	));
	return (
		<>
			<div className="favs-header my-2">
				<h2>Favorite Media</h2>
				<div className="btn btn-primary" onClick={changeView}>
					<FontAwesomeIcon icon={faBookmark} className="mr-1" />
					{view === 'list' ? 'Add new' : 'Back to list'}
				</div>
			</div>

			{view === 'list' && (
				<table className="table">
					<thead>
						<tr>
							<th>Title</th>
							<th className="hide-sm">Type</th>
							<th className="hide-sm">Description</th>
							<th className="hide-sm">Actions</th>
						</tr>
					</thead>
					<tbody>{mediaList}</tbody>
				</table>
			)}
			{view === 'new' && <AddMedia changeView={changeView} />}
		</>
	);
};

Media.propTypes = {
	media: PropTypes.array.isRequired,
};

export default Media;
