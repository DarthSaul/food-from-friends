import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faThumbsUp,
	faThumbsDown,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { UserContext } from '../../contexts/UserContext';
import { ListsContext } from '../../contexts/ListsContext';

const ListItem = ({
	list: {
		_id,
		city,
		likes,
		comments,
		user: { name, avatar, _id: user_id },
	},
	showActions,
}) => {
	const {
		userObj: { loading: userLoading, user: currentUser },
	} = useContext(UserContext);

	const { likeList, unlikeList, deleteList } = useContext(ListsContext);

	return (
		<div className="list mb-1">
			<div className="list-top p-1">
				<div className="list-inner-header">
					<div>
						<div className="fs-2">{city}</div>
						<div className="fw-light">
							<span className="mr">{name}</span>
							<Link
								to={`/profile/${user_id}`}
								className="list-profile-link"
							>
								<FontAwesomeIcon icon={faUserCircle} />
							</Link>
						</div>
					</div>
					<div>
						<img src={avatar.url} alt="" />
					</div>
				</div>
				<div>
					{showActions && (
						<Link to={`/lists/${_id}`} className="btn btn-primary">
							View List
						</Link>
					)}
				</div>
			</div>

			{showActions && (
				<>
					<hr />
					<div className="list-actions p-1">
						<div>
							<button
								type="button"
								className="btn btn-dark btn-sm mr"
								onClick={() => likeList(_id)}
							>
								<FontAwesomeIcon icon={faThumbsUp} />{' '}
								{likes.length > 0 && (
									<span>{likes.length}</span>
								)}
							</button>

							<button
								type="button"
								className="btn btn-dark btn-sm mr"
								onClick={() => unlikeList(_id)}
							>
								<FontAwesomeIcon icon={faThumbsDown} />
							</button>

							<Link
								to={`/lists/${_id}`}
								className="btn btn-dark btn-sm"
							>
								Discussion{' '}
								{comments.length > 0 && (
									<span className="comment-count">
										{comments.length}
									</span>
								)}
							</Link>
						</div>

						{!userLoading &&
							currentUser &&
							user_id === currentUser.data._id && (
								<div>
									<button
										type="button"
										className="btn btn-danger btn-sm"
										onClick={() => deleteList(_id)}
									>
										<FontAwesomeIcon icon={faTimes} />
									</button>
								</div>
							)}
					</div>
				</>
			)}
		</div>
	);
};

ListItem.propTypes = {
	list: PropTypes.object.isRequired,
};

export default ListItem;
