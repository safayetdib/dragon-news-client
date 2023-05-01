import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Badge } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
	return (
		<div className="mt-4">
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
		</div>
	);
};

export default Header;
