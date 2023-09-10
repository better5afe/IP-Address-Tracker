import { useContext } from 'react';
import Loader from './Loader';
import { TrackerContext } from '../../context/tracker-context';

import './TrackerResultCard.scss';

interface TrackerResultCardProps {
	title: string;
	result: string;
}

const TrackerResultCard: React.FC<TrackerResultCardProps> = ({
	title,
	result,
}) => {
	const trackerCtx = useContext(TrackerContext);

	return (
		<div className='result-card'>
			<h2 className='result-card__title'>{title}</h2>
			{trackerCtx.isLoading ? <Loader /> : <p className='result-card__result'>{result}</p>}
		</div>
	);
};

export default TrackerResultCard;
