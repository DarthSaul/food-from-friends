import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ProfileContext } from '../../contexts/ProfileContext';

const Media = ({ media }) => {
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
				<Link to="/add-media" className="btn btn-primary">
					<FontAwesomeIcon icon={faBookmark} className="mr-1" />
					Add new
				</Link>
			</div>
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
		</>
	);
};

Media.propTypes = {
	media: PropTypes.array.isRequired,
};

export default Media;
