import React from 'react';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const QZone = () => {
	return (
		<div className="bg-light w-100 p-2">
			<h5>Q-Zone</h5>

			<div>
				<img src={qzone1} alt="" className="img-fluid" />
				<img src={qzone2} alt="" className="img-fluid" />
				<img src={qzone3} alt="" className="img-fluid" />
			</div>
		</div>
	);
};

export default QZone;
