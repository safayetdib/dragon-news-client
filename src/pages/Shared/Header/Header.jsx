import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Badge, Button } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
	return (
		<div className="py-4">
			<div className="text-center">
				<img src={logo} alt="Logo" className="img-fluid" />
				<p className="my-2">
					<small className="text-secondary">
						Journalism Without Fear or Favour
					</small>
				</p>

				<p>
					<span className="fw-semibold">{moment().format('dddd,')}</span>{' '}
					<span>{moment().format('MMMM Do, YYYY')}</span>
				</p>
			</div>

			<div className="bg-light p-2 d-flex gap-2">
				<h3 className="m-0">
					<Badge bg="danger" className="rounded-0 py-2 fw-normal">
						Latest
					</Badge>
				</h3>
				<Marquee pauseOnHover="true" className="text-danger">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem dolore tempora dicta omnis asperiores dignissimos,
					voluptatem error dolor tempore esse?
				</Marquee>
			</div>

			{/* navbar */}
			<Navbar expand="md" bg="white" variant="light">
				<Container>
					<Navbar
						id="navbar-nav"
						className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-between w-100">
						<Nav className="">
							<Nav.Link href="#features">Home</Nav.Link>
							<Nav.Link href="#pricing">About</Nav.Link>
							<Nav.Link href="#career">Career</Nav.Link>
						</Nav>

						<Nav className="">
							<Nav.Link href="#user">
								<img
									className="rounded-circle border border-info border-2"
									style={{ height: '35px' }}
									src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
									alt="User"
								/>
							</Nav.Link>
							<Button
								variant="secondary"
								size="sm"
								className="rounded-0 my-auto ms-3 px-3">
								Login
							</Button>
						</Nav>
					</Navbar>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
