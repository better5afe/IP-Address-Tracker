import TrackerResultCard from './TrackerResultCard';

const TrackerResult = () => {
	return (
		<section>
			<TrackerResultCard title='ip address' />
			<TrackerResultCard title='location' />
			<TrackerResultCard title='timezone' />
			<TrackerResultCard title='isp' />
		</section>
	);
};

export default TrackerResult;
