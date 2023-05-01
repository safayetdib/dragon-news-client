import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
	const { createUser } = useContext(AuthContext);

	const [accepted, setAccepted] = useState(false);
	const handleCheckbox = (e) => {
		setAccepted(e.target.checked);
	};

	const handleRegister = (e) => {
		e.preventDefault();

		const form = e.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;

		console.log(name, photo, email, password);

		createUser(email, password)
			.then((res) => {
				const createdUser = res.user;
				console.log(createdUser);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Container>
			<Form
				onSubmit={handleRegister}
				className="w-50 border mx-auto my-5 p-3 rounded shadow-sm">
				<h5 className="fw-bold text-center my-4">Please Register</h5>

				<Form.Group className="mb-3" controlId="formGroupName">
					<Form.Label className="text-muted">Your Name</Form.Label>
					<Form.Control
						type="text"
						name="name"
						placeholder="Your Name"
						className="rounded-0"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label className="text-muted">Photo URL</Form.Label>
					<Form.Control
						type="text"
						name="photo"
						placeholder="Your Photo"
						className="rounded-0"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label className="text-muted">Email address</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter email"
						className="rounded-0"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGroupPassword">
					<Form.Label className="text-muted">Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						className="rounded-0"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" id="formGridCheckbox">
					<Form.Check
						onClick={handleCheckbox}
						type="checkbox"
						name="accept"
						label={
							<>
								Accept <Link to="/terms">Terms & Conditions</Link>{' '}
							</>
						}
						required
					/>
				</Form.Group>

				<Button
					type="submit"
					disabled={!accepted}
					variant="secondary w-100 rounded-0 my-4">
					Register
				</Button>

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
