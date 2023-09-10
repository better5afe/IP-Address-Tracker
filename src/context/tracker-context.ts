import React from 'react';
import { Error, AddressData } from '../models/models';

interface TrackerContextProps {
	addressData: AddressData;
	searchIPHandler: (value: string) => void;
	error: Error;
}

export const TrackerContext = React.createContext<TrackerContextProps>({
	addressData: {
		ipAddress: '',
		location: '',
		timezone: '',
		isp: '',
	},
	searchIPHandler: () => {},
	error: { isError: false, errorMsg: '' },
});
