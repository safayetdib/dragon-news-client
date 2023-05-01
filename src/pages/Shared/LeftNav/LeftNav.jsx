import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('https://dragon-news-server-safayetalam.vercel.app/categories')
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div>
			<h5>All Categories</h5>

			<ListGroup className="mt-2">
				{categories.map((category) => (
					<NavLink
						to={`/category/${category.id}`}
						key={category.id}
						className={`text-decoration-none text-secondary border py-2 px-3 rounded mt-2 hover-effect`}>
						{category.name}
					</NavLink>
				))}
			</ListGroup>
		</div>
	);
};

export default LeftNav;
