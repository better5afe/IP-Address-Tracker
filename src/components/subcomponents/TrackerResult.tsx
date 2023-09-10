import { useContext } from 'react';
import TrackerResultCard from './TrackerResultCard';
import { TrackerContext } from '../../context/tracker-context';

import './TrackerResult.scss';

const TrackerResult = () => {
	const trackerCtx = useContext(TrackerContext);

	return (
		<section className='tracker-result'>
			<TrackerResultCard title='ip address' result={trackerCtx.addressData.ipAddress} />
			<TrackerResultCard title='location' result={trackerCtx.addressData.location}  />
			<TrackerResultCard title='timezone' result={trackerCtx.addressData.timezone}  />
			<TrackerResultCard title='isp' result={trackerCtx.addressData.isp}  />
		</section>
	);
};

export default TrackerResult;
