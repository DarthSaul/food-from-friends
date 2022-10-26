import React, { useContext, useState } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';

const AddMedia = ({ changeView }) => {
	const [formData, setFormData] = useState({
		title: '',
		type: '',
		description: '',
	});

	const { addMedia } = useContext(ProfileContext);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((state) => ({
			...state,
			[name]: value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		addMedia(formData);
		changeView();
	};

	const { title, type, description } = formData;

	return (
		<div className="dashboard-form">
			<div className="fs-3 text-primary">Add Media</div>
			<div className="text-muted fw-light">
				Add media to your favorites. Once finished, click{' '}
				<strong>Submit</strong>.
				<div>
					<small>* Required field</small>
				</div>
			</div>
			<hr className="my-1" />
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-group">
					<div>
						<div>Title *</div>
						<small className="form-text">Title of media</small>
					</div>
					<input
						type="text"
						placeholder="Title"
						name="title"
						value={title}
						onChange={handleChange}
						required
					/>
				</div>
				<hr className="my-1" />
				<div className="form-group">
					<div>
						<div>Type *</div>
						<small className="form-text">Type of media</small>
					</div>
					<select
						name="type"
						value={type}
						onChange={handleChange}
						required
					>
						<option>Select a type</option>
						<option value="movie">Movie</option>
						<option value="series">Television Series</option>
						<option value="show">Standalone Show</option>
						<option value="book">Book</option>
						<option value="newspaper">Newspaper</option>
						<option value="magazine">Magazine</option>
						<option value="column">Column</option>
						<option value="Other">Other</option>
					</select>
				</div>
				<hr className="my-1" />
				<div className="form-group">
					<div>
						<div>Description *</div>
						<small className="form-text">
							Please provide a brief description of the media
						</small>
					</div>
					<textarea
						name="description"
						cols="30"
						rows="5"
						placeholder="Description"
						value={description}
						onChange={handleChange}
					/>
				</div>
				<hr className="my" />
				<div className="dashboard-submit">
					<input
						type="submit"
						className="btn btn-primary btn-lg my-1"
					/>
				</div>
			</form>
		</div>
	);
};

export default AddMedia;
