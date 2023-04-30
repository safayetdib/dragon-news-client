import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {
	FaGoogle,
	FaGithub,
	FaFacebook,
	FaTwitter,
	FaInstagram,
} from 'react-icons/fa';
import QZone from '../Qzone/Qzone';
import adImg from '../../../assets/bg.png';

const RightNav = () => {
	return (
		<div>
			<div>
				<h5>Login With</h5>
				<Button variant="outline-primary" className="w-100">
					<FaGoogle className="me-2 fs-5" /> Login with Google
				</Button>
				<Button variant="outline-secondary" className="w-100 mt-2">
					<FaGithub className="me-2 fs-5" /> Login with Github
				</Button>
			</div>

			<div className="mt-4">
				<h5>Find Us On</h5>
				<ListGroup>
					<ListGroup.Item action>
						<FaFacebook className="me-2 fs-5" /> Facebook
					</ListGroup.Item>
					<ListGroup.Item action>
						<FaTwitter className="me-2 fs-5" /> Twitter
					</ListGroup.Item>
					<ListGroup.Item action>
						<FaInstagram className="me-2 fs-5" /> Instagram
					</ListGroup.Item>
				</ListGroup>
			</div>

			<div className="mt-4">
				<QZone />
			</div>

			<div className="mt-4 position-relative w-100">
				<img src={adImg} alt="" className="img-fluid" />
				<div className="position-absolute top-50 start-50 translate-middle text-white text-center">
					<h4>Create an Amazing Newspaper</h4>
					<h6 className="mt-3">
						Discover thousands of options, easy to customize layouts, one-click
						to import demo and much more.
					</h6>
					<Button variant="danger" className="rounded-0 mt-3 fw-semibold">
						Learn More
					</Button>
				</div>
			</div>
		</div>
	);
};

export default RightNav;
