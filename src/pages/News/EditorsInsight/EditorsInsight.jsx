import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EditorsInsight = () => {
	const [editorsInsight, setEditorsInsight] = useState([]);

	useEffect(() => {
		fetch(`https://dragon-news-server-safayetalam.vercel.app/categories/0`)
			.then((res) => res.json())
			.then((data) => setEditorsInsight(data.slice(0, 3)))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<h4 className="mb-3">Editors Insight</h4>
			<CardGroup>
				{editorsInsight.map((news) => (
					<Card key={news._id}>
						<Card.Img variant="top" src={news.image_url} />
						<Card.Body>
							<Card.Title>{news.title}</Card.Title>
							<Card.Text>
								{news.details.length < 100 ? (
									<>{news.details}</>
								) : (
									<>
										{news.details.slice(0, 100)}...{' '}
										<Link to={`/news/${news._id}`}>Read More</Link>{' '}
									</>
								)}
							</Card.Text>
						</Card.Body>
					</Card>
				))}
			</CardGroup>
		</div>
	);
};

export default EditorsInsight;
