import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<Container>
			<Form className="w-50 border mx-auto my-5 p-3 rounded shadow-sm">
				<h5 className="fw-bold text-center my-4">Login to Your Account</h5>
				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label className="text-muted">Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						className="rounded-0"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGroupPassword">
					<Form.Label className="text-muted">Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						className="rounded-0"
						required
					/>
				</Form.Group>

				<Button variant="secondary w-100 rounded-0 my-4">Login</Button>

				<p className="text-center">
					<span>Don't Have An Account?</span>{' '}
					<span>
						<Link to="/register" className="text-danger">
							Register
						</Link>
					</span>
				</p>
			</Form>
		</Container>
	);
};

export default Login;
