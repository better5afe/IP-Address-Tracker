interface TrackerResultCardProps {
	title: string;
}

const TrackerResultCard: React.FC<TrackerResultCardProps> = ({ title }) => {
	return <h1>{title}</h1>;
};

export default TrackerResultCard;
