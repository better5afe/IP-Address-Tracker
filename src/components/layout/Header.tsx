import TrackerForm from '../subcomponents/TrackerForm';
import TrackerResult from '../subcomponents/TrackerResult';

import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<h1 className='header__title'>IP Address Tracker</h1>
				<TrackerForm />
				{/* <TrackerResult /> */}
			</div>
		</header>
	);
};

export default Header;
