import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
	const { id } = useParams();
	const categoryNews = useLoaderData();

	return (
		<div>
			{id && (
				<h5 className="mb-3 text-muted">
					Total News in This Category: {categoryNews.length}
				</h5>
			)}

			{categoryNews.map((news) => (
				<NewsCard key={news._id} news={news} />
			))}
		</div>
	);
};

export default Category;
