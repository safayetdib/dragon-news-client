import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
	return (
		<Container className="text-center mt-5">
			<h3>Terms and Conditions</h3>
			<p className="my-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
				perspiciatis consequuntur sed veniam aperiam tempore libero commodi
				iusto, alias quaerat labore earum, optio asperiores voluptatibus.
				Laudantium, error iste hic impedit, nam soluta illo magni explicabo
				distinctio, ullam ex consectetur dolores optio neque? Quaerat suscipit
				facere accusantium aliquid perferendis a at!
			</p>
			<p>
				Go back to <Link to="/register">Register</Link>
			</p>
		</Container>
	);
};

export default Terms;
