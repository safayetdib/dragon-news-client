import moment from 'moment';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft, FaBookmark, FaShare } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
	const news = useLoaderData();

	const { image_url, title, details, author, category_id } = news;

	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Img src={image_url} />
					<Card.Title className="my-4">{title}</Card.Title>
					<div className="d-flex">
						<div className="d-flex align-items-center gap-2 mb-3">
							<img
								src={author.img}
								alt="Author"
								className="img-fluid rounded-circle border border-secondary"
								style={{ height: '30px' }}
							/>
							<p className="m-0 text-muted fw-semibold">{author.name}</p>
						</div>
						<div className="ms-auto">
							<Button variant="outline-secondary">
								<FaBookmark />
							</Button>
							<Button variant="outline-secondary ms-2">
								<FaShare />
							</Button>
						</div>
					</div>
					<Card.Text>{details}</Card.Text>

					<Link to={`/category/${category_id}`}>
						<Button variant="danger" className="rounded-0 px-3">
							<FaArrowLeft className="me-2" /> All news in this category
						</Button>
					</Link>
				</Card.Body>
			</Card>

			<div className="mt-5">
				<EditorsInsight />
			</div>
		</div>
	);
};

export default News;
