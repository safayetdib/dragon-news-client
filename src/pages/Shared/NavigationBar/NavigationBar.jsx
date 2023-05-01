import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
	const { user } = useContext(AuthContext);

	return (
		<Container>
			<Navbar expand="md" bg="white" variant="light">
				<Container>
					<Navbar
						id="navbar-nav"
						className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-between w-100">
						<Nav className="d-flex gap-4">
							<NavLink
								to="/category/0"
								className="text-decoration-none text-secondary">
								Home
							</NavLink>
							<NavLink
								to="/category/3"
								className="text-decoration-none text-secondary">
								International
							</NavLink>
							<NavLink
								to="/category/4"
								className="text-decoration-none text-secondary">
								Sports
							</NavLink>
						</Nav>

						<Nav className="">
							{!user ? (
								<Link to="/login" className="m-0 text-decoration-none">
									<Button
										variant="secondary"
										size="sm"
										className="rounded-0 my-auto ms-3 px-3">
										Login
									</Button>
								</Link>
							) : (
								<>
									<Nav.Link
										href="#user"
										className="d-flex align-items-center gap-2">
										<img
											className="rounded-circle border border-info border-2"
											style={{ height: '35px' }}
											src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
											alt="User"
										/>
										<p className="m-0 fw-semibold">{user.displayName}</p>
									</Nav.Link>
									<Button
										variant="secondary"
										size="sm"
										className="rounded-0 my-auto ms-3 px-3">
										Logout
									</Button>
								</>
							)}
						</Nav>
					</Navbar>
				</Container>
			</Navbar>
		</Container>
	);
};

export default NavigationBar;
