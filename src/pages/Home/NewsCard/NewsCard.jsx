/* eslint-disable react/prop-types */
import moment from 'moment';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {
	FaBookmark,
	FaEye,
	FaRegStar,
	FaShare,
	FaStar,
	FaStarHalf,
} from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
	const { _id, title, details, author, image_url, total_view, rating } = news;
	return (
		<div className="mb-4">
			<Card>
				<Card.Header className="d-flex gap-3 align-items-center py-3">
					<img
						src={author.img}
						alt="Author"
						className="img-fluid rounded-circle"
						style={{ height: '50px' }}
					/>
					<div>
						<p className="fw-semibold m-0">{author?.name}</p>
						<p className="text-secondary m-0">
							{moment(author.published_date).format('MMMM Do, YYYY')}
						</p>
					</div>
					<div className="ms-auto">
						<Button variant="outline-secondary">
							<FaBookmark />
						</Button>
						<Button variant="outline-secondary ms-2">
							<FaShare />
						</Button>
					</div>
				</Card.Header>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Img src={image_url} className="my-3" />
					<Card.Text>
						{details.length < 250 ? (
							<>{details}</>
						) : (
							<>
								{details.slice(0, 250)}...{' '}
								<Link to={`/news/${_id}`}>Read More</Link>{' '}
							</>
						)}
					</Card.Text>
				</Card.Body>
				<Card.Footer className="d-flex align-items-center justify-content-between text-muted py-3">
					<div>
						<Rating
							className="text-warning"
							placeholderRating={rating.number}
							emptySymbol={<FaRegStar />}
							placeholderSymbol={<FaStar />}
							fullSymbol={<FaStar />}
							readonly
						/>
						<span className="ms-2">{rating?.number}</span>
					</div>
					<div>
						<FaEye className="me-2" />
						<span>{total_view}</span>
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default NewsCard;
