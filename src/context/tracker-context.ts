import React from 'react';
import { Error, AddressData } from '../models/models';
import { LatLngTuple } from 'leaflet';

interface TrackerContextProps {
	addressData: AddressData;
	searchIPHandler: (value: string) => void;
	error: Error;
	latLng: LatLngTuple;
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
	latLng: [0, 0],
});
