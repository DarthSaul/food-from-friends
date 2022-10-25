import React from 'react';
import LandingNavbar from '../landing/LandingNavbar';
import LandingHero from '../landing/LandingHero';
import LandingFooter from '../landing/LandingFooter';

import '../../css/Landing.css';

const Landing = () => {
	return (
		<div className="landing-inner">
			<div className="landing-header">
				<LandingNavbar />
			</div>
			<LandingHero />
			<div className="landing-footer">
				<LandingFooter />
			</div>
		</div>
	);
};

export default Landing;
