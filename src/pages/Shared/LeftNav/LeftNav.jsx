import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const LeftNav = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/categories')
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			<h5>All Categories</h5>

			<ListGroup className="mt-2">
				{categories.map((category) => (
					<ListGroup.Item action key={category.id}>
						{category.name}
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
};

export default LeftNav;
