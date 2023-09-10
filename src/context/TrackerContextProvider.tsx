import { TrackerContext } from './tracker-context';

interface TrackerContextProviderProps {
	children: React.ReactNode;
}

const TrackerContextProvider: React.FC<TrackerContextProviderProps> = ({
	children,
}) => {
	const dummyAddress = {
		ipAddress: '192.212.174.101',
		location: 'Brooklyn, NY 10001',
		timezone: 'UTC -05:00',
		isp: 'SpaceX Starlink',
	};

	return (
		<TrackerContext.Provider value={{ addressData: dummyAddress }}>
			{children}
		</TrackerContext.Provider>
	);
};

export default TrackerContextProvider;
