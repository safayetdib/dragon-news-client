import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
	const { signIn } = useContext(AuthContext);

	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || '/category/0';

	const handleLogin = (e) => {
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then((res) => {
				const userData = res.user;

				navigate(from, { replace: true });
			})
			.catch((err) => console.log(err));
	};

	return (
		<Container>
			<Form
				onSubmit={handleLogin}
				className="w-50 border mx-auto my-5 p-3 rounded shadow-sm">
				<h5 className="fw-bold text-center my-4">Login to Your Account</h5>
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

				<Button type="submit" variant="secondary w-100 rounded-0 my-4">
					Login
				</Button>

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
