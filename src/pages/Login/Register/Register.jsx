import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<Container>
			<Form className="w-50 border mx-auto my-5 p-3 rounded shadow-sm">
				<h5 className="fw-bold text-center my-4">Please Register</h5>

				<Form.Group className="mb-3" controlId="formGroupName">
					<Form.Label className="text-muted">Your Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Your Name"
						className="rounded-0"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label className="text-muted">Photo URL</Form.Label>
					<Form.Control
						type="text"
						placeholder="Your Photo"
						className="rounded-0"
						required
					/>
				</Form.Group>

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

				<Form.Group className="mb-3" id="formGridCheckbox">
					<Form.Check
						type="checkbox"
						label="Accept terms & Conditions"
						required
					/>
				</Form.Group>

				<Button variant="secondary w-100 rounded-0 my-4">Register</Button>

				<p className="text-center">
					<span>Already Have An Account?</span>{' '}
					<span>
						<Link to="/login" className="text-danger">
							Login
						</Link>
					</span>
				</p>
			</Form>
		</Container>
	);
};

export default Register;
