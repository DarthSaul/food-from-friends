import React, { useContext, useState } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';

const AddRestaurant = ({ changeView }) => {
	const [formData, setFormData] = useState({
		name: '',
		location: '',
		rating: 1,
		review: '',
	});

	const { addRestaurant } = useContext(ProfileContext);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((state) => ({
			...state,
			[name]: value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		addRestaurant(formData);
		changeView();
	};

	const { name, location, rating, review } = formData;

	return (
		<div className="dashboard-form">
			<div className="fs-3 text-primary">Add a Favorite Restaurant</div>
			<div className="text-muted fw-light">
				Add a restaurant to your favorites. Once finished, click{' '}
				<strong>Submit</strong>.
				<div>
					<small>* Required field</small>
				</div>
			</div>
			<hr className="my-1" />
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-group">
					<div>
						<div>Name *</div>
						<small className="form-text">Name of restaurant</small>
					</div>
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={handleChange}
						required
					/>
				</div>
				<hr className="my-1" />
				<div className="form-group">
					<div>
						<div>Location *</div>
						<small className="form-text">
							City & state suggested (eg. Pittsburgh, PA)
						</small>
					</div>
					<input
						type="text"
						placeholder="Location"
						name="location"
						value={location}
						onChange={handleChange}
						required
					/>
				</div>
				<hr className="my-1" />
				<div className="form-group">
					<div>
						<div>Rating *</div>
						<small className="form-text">
							Rate 1-10, with 1 being poor and 10 being excellent
						</small>
					</div>
					<div>
						<input
							type="number"
							placeholder="Rating 1-10"
							name="rating"
							min={1}
							max={10}
							value={rating}
							onChange={handleChange}
							required
						/>
					</div>
				</div>
				<hr className="my-1" />
				<div className="form-group">
					<div>
						<div>Review</div>
						<small className="form-text">
							Leave a brief review if you wish
						</small>
					</div>
					<textarea
						name="review"
						cols="30"
						rows="5"
						placeholder="Review"
						value={review}
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

export default AddRestaurant;
