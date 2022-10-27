import React, { useState } from 'react';
import CommentForm from './CommentForm';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Comments = ({ id, comments }) => {
	const [commentTab, changeTab] = useState(0);
	const tabsNum = Math.ceil(comments.length / 3);
	const commentsSliced = comments.slice(3 * commentTab, 3 * commentTab + 3);
	const tabBack = (event) => {
		if (commentTab !== 0) {
			changeTab(commentTab - 1);
		}
	};
	const tabForward = (event) => {
		if (commentTab + 1 !== tabsNum) {
			changeTab(commentTab + 1);
		}
	};
	return (
		<div className="comments-layout mb-3">
			<div>
				<div className="comments-list-wrapper">
					<div className="comments-top">
						<div className="text-muted">
							<FontAwesomeIcon
								icon={faChevronLeft}
								size="sm"
								className="mr-1 cursor-pointer"
								onClick={(e) => tabBack()}
							/>
							<FontAwesomeIcon
								icon={faChevronRight}
								size="sm"
								className="mr cursor-pointer"
								onClick={(e) => tabForward()}
							/>
							<span className="text-dark">
								{commentTab + 1} of{' '}
								{tabsNum === 0 ? 1 : tabsNum}
							</span>
						</div>
						<div>
							<div className="btn btn-dark btn-sm">Actions</div>
						</div>
					</div>
					<ul>
						{commentsSliced.map((comment) => (
							<li key={comment._id}>
								<div className="comment-header">
									<img
										src={
											comment.user.avatar
												? comment.user.avatar.thumbnail
												: 'https://res.cloudinary.com/darthsaul/image/upload/v1626367195/Coffee-Corner/no_image_wkgy3c.png'
										}
										alt="avatar"
									/>
									<span className="mr">
										{comment.user.name}
									</span>
									<small className="text-muted">
										<Moment format="M.DD">
											{comment.date}
										</Moment>
									</small>
								</div>
								<div className="comment-text fw-light">
									{comment.text}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="vertical-rule full-rule"></div>
			<div className="comment-space">
				<CommentForm listId={id} />
			</div>
		</div>
	);
};

export default Comments;
