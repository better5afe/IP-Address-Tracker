import './TrackerResultCard.scss';

interface TrackerResultCardProps {
	title: string;
	result: string;
}

const TrackerResultCard: React.FC<TrackerResultCardProps> = ({
	title,
	result,
}) => {
	return (
		<div className='result-card'>
			<h2 className='result-card__title'>{title}</h2>
			<p className='result-card__result'>{result}</p>
		</div>
	);
};

export default TrackerResultCard;
