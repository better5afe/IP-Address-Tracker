import React from 'react';

interface TrackerContextProps {
	addressData: {
		ipAddress: string;
		location: string;
		timezone: string;
		isp: string;
	};
}

export const TrackerContext = React.createContext<TrackerContextProps>({
	addressData: {
		ipAddress: '',
		location: '',
		timezone: '',
		isp: '',
	},
});
